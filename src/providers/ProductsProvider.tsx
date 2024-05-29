import { createContext, useState } from 'react';
import { collection, deleteDoc, deleteField, doc, getDoc, getDocs, increment, setDoc, updateDoc } from 'firebase/firestore';
import { db } from 'src/firebase';
import { v4 as uuid } from 'uuid';
import { CustomProductType, ProductType, ProductsContextType, ProductsProviderProps } from 'src/types/types';

export const ProductsContext = createContext<ProductsContextType>({
	defaultProducts: [],
	customProducts: [],
	productsList: [],
	shoppingProgress: 0,
	setDefaultProducts: () => {},
	setCustomProducts: () => {},
	setProductsList: () => {},
	countShoppingProgress: () => {},
	handleBoughtStatus: () => {},
	removeBoughtProducts: () => {},
	updateProductsList: () => {},
	updateProductsQuantity: () => {},
	updateProductCategory: () => {},
	updateCustomProductsQuantity: () => {},
});

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const [defaultProducts, setDefaultProducts] = useState<never[] | ProductType[]>([]);
	const [customProducts, setCustomProducts] = useState<never[] | ProductType[]>([]);
	const [productsList, setProductsList] = useState<never[] | ProductType[]>([]);
	const [shoppingProgress, setShoppingProgress] = useState(0);

	const countShoppingProgress = () => {
		let productToBuy = 0;
		let boughtProducts = 0;

		for (let i = 0; i < productsList.length; i++) {
			if (productsList[i].quantity >= 0) productToBuy++;
		}

		for (let i = 0; i < productsList.length; i++) {
			if (productsList[i].quantity >= 0 && productsList[i].isBought === true) {
				boughtProducts++;
			}
		}

		const boughtProductsPercentage = Math.round((boughtProducts / productToBuy) * 100);

		setShoppingProgress(boughtProductsPercentage);
	};

	const handleBoughtStatus = (firestoreId: string, productId: number | string, isBought: boolean) => {
		const timeoutValue = isBought ? 400 : 650;

		const dataToUpdatedPath = typeof productId === 'number' ? 'defaultProducts' : 'customProducts';

		setTimeout(async () => {
			const productRef = doc(db, dataToUpdatedPath, firestoreId);
			try {
				const product = (await getDoc(productRef)).data()!;
				try {
					await updateDoc(productRef, {
						isBought: !product.isBought,
					});
				} catch (error) {
					console.log(error);
				}
			} catch (error) {
				console.log(error);
			}
		}, timeoutValue);
	};

	const removeBoughtProducts = () => {
		customProducts.forEach(async product => {
			if (!product.isBought) return;

			try {
				await deleteDoc(doc(db, 'customProducts', product.firestoreId));
			} catch (error) {
				console.log(error);
			}
		});

		defaultProducts.forEach(async product => {
			if (product.isBought) {
				const productRef = doc(db, 'defaultProducts', product.firestoreId);
				try {
					await updateDoc(productRef, {
						quantity: -1,
						unit: '',
						isBought: false,
						userCategory: deleteField(),
					});
				} catch (error) {
					console.log(error);
				}
			}
		});
	};

	const updateProductsList = async (editedProduct: ProductType) => {
		if (typeof editedProduct.id === 'string') {
			const productRef = doc(db, 'customProducts', editedProduct.firestoreId);
			try {
				await updateDoc(productRef, {
					...editedProduct,
				});
			} catch (error) {
				console.log(error);
			}
		} else if (typeof editedProduct.id === 'number') {
			const productRef = doc(db, 'defaultProducts', editedProduct.firestoreId);

			if (defaultProducts.map(product => product.name).includes(editedProduct.name)) {
				try {
					await updateDoc(productRef, {
						userCategory: editedProduct.category,
						quantity: editedProduct.quantity,
						unit: editedProduct.unit,
					});
				} catch (error) {
					console.log(error);
				}
			} else {
				try {
					await updateDoc(productRef, {
						quantity: -1,
						unit: '',
						isBought: false,
					});
				} catch (error) {
					console.log(error);
				}

				const id = uuid();
				try {
					await setDoc(doc(db, 'customProducts', id), {
						...editedProduct,
						firestoreId: id,
						id,
					});
				} catch (error) {
					console.log(error);
				}
			}
		}
	};

	const updateProductsQuantity = async (firebaseId: string, productId: number | string, quantityChanger: 1 | -1) => {
		if (typeof productId === 'number') {
			const productRef = doc(db, 'defaultProducts', firebaseId);
			try {
				const product = (await getDoc(productRef)).data()!;
				try {
					await updateDoc(productRef, {
						quantity: increment(quantityChanger),
						unit: product.quantity + quantityChanger < 0 ? '' : product.unit,
					});
				} catch (error) {
					console.log(error);
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			const productRef = doc(db, 'customProducts', firebaseId);
			try {
				const product = (await getDoc(productRef)).data()!;
				try {
					await updateDoc(productRef, {
						quantity: increment(quantityChanger),
						unit: product.quantity + quantityChanger < 0 ? '' : product.unit,
					});
				} catch (error) {
					console.log(error);
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	const updateProductCategory = async (
		categoryChangeProductId: { id: string | number; firestoreId: string } | null,
		clickedCategory: { name: string; imgSrc: string }
	) => {
		if (typeof categoryChangeProductId?.id === 'string') {
			const productRef = doc(db, 'customProducts', categoryChangeProductId.firestoreId);
			try {
				await updateDoc(productRef, {
					category: clickedCategory,
				});
			} catch (error) {
				console.log(error);
			}
		} else if (typeof categoryChangeProductId?.id === 'number') {
			const productRef = doc(db, 'defaultProducts', categoryChangeProductId.firestoreId);
			try {
				await updateDoc(productRef, {
					userCategory: clickedCategory,
				});
			} catch (error) {
				console.log(error);
			}
		}
	};

	const updateCustomProductsQuantity = async (customProduct: CustomProductType) => {
		if (customProduct.name === '') return;

		try {
			const customProductsList = (await getDocs(collection(db, 'customProducts'))).docs.map(
				product =>
					({
						firestoreId: product.id,
						...product.data(),
					} as ProductType)
			);

			const checkedProductIndex = customProductsList.map(product => product.name).indexOf(customProduct.name);

			if (customProductsList.length > 0 && checkedProductIndex >= 0) {
				const firestoreId = customProductsList[checkedProductIndex].firestoreId;
				const productRef = doc(db, 'customProducts', firestoreId);
				try {
					await updateDoc(productRef, {
						quantity: customProduct.quantity,
					});
				} catch (error) {
					console.log(error);
				}
			} else {
				const id = uuid();
				try {
					await setDoc(doc(db, 'customProducts', id), {
						id,
						...customProduct,
					});
				} catch (error) {
					console.log(error);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ProductsContext.Provider
			value={{
				defaultProducts,
				setDefaultProducts,
				customProducts,
				setCustomProducts,
				productsList,
				setProductsList,
				shoppingProgress,
				countShoppingProgress,
				handleBoughtStatus,
				removeBoughtProducts,
				updateProductsList,
				updateProductsQuantity,
				updateProductCategory,
				updateCustomProductsQuantity,
			}}>
			{children}
		</ProductsContext.Provider>
	);
};
