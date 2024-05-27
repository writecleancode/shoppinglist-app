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
			const product = (await getDoc(productRef)).data()!;

			await updateDoc(productRef, {
				isBought: !product.isBought,
			});
		}, timeoutValue);

		// if (typeof productId === 'number') {
		// 	setTimeout(async () => {
		// 		const productRef = doc(db, 'defaultProducts', firestoreId);
		// 		const product = (await getDoc(productRef)).data()!;

		// 		await updateDoc(productRef, {
		// 			isBought: !product.isBought,
		// 		});

		// 		// setDefaultProducts(prevProducts => [
		// 		// 	...prevProducts.slice(0, productId - 1),
		// 		// 	{
		// 		// 		...prevProducts[productId - 1],
		// 		// 		isBought: !prevProducts[productId - 1].isBought,
		// 		// 	},
		// 		// 	...prevProducts.slice(productId),
		// 		// ]);
		// 	}, timeoutValue);
		// } else {
		// 	setTimeout(async () => {
		// 		const productRef = doc(db, 'customProducts', firestoreId);
		// 		const product = (await getDoc(productRef)).data()!;

		// 		await updateDoc(productRef, {
		// 			isBought: !product.isBought,
		// 		});

		// 		// setCustomProducts(prevProducts => [
		// 		// 	...prevProducts.slice(0, checkedProductIndex),
		// 		// 	{
		// 		// 		...prevProducts[checkedProductIndex],
		// 		// 		isBought: !prevProducts[checkedProductIndex].isBought,
		// 		// 	},
		// 		// 	...prevProducts.slice(checkedProductIndex + 1),
		// 		// ]);
		// 	}, timeoutValue);
		// }
	};

	const removeBoughtProducts = () => {
		// const filteredCustomProducts = customProducts.filter(product => product.isBought === false);
		// const resetDefaultProducts = defaultProducts.map(product => {
		// 	if (product.isBought === true) {
		// 		return {
		// 			id: product.id,
		// 			name: product.name,
		// 			category: product.category,
		// 			quantity: -1,
		// 			unit: '',
		// 			isBought: false,
		// 		};
		// 	} else {
		// 		return product;
		// 	}
		// });

		// setCustomProducts(filteredCustomProducts);
		// setDefaultProducts(resetDefaultProducts);

		customProducts.forEach(async product => {
			product.isBought && (await deleteDoc(doc(db, 'customProducts', product.firestoreId)));
		});

		defaultProducts.forEach(async product => {
			if (product.isBought) {
				const productRef = doc(db, 'defaultProducts', product.firestoreId);
				await updateDoc(productRef, {
					quantity: -1,
					unit: '',
					isBought: false,
					userCategory: deleteField(),
				});
			}
		});
	};

	const updateProductsList = async (editedProduct: ProductType) => {
		if (typeof editedProduct.id === 'string') {
			// const productIndex = customProducts.map(product => product.id).indexOf(editedProduct.id);
			// setCustomProducts(prevProducts => [...prevProducts.slice(0, productIndex), editedProduct, ...prevProducts.slice(productIndex + 1)]);

			const productRef = doc(db, 'customProducts', editedProduct.firestoreId);
			await updateDoc(productRef, {
				...editedProduct,
			});
		} else if (typeof editedProduct.id === 'number') {
			// const productIndex = defaultProducts.map(product => product.id).indexOf(editedProduct.id);
			const productRef = doc(db, 'defaultProducts', editedProduct.firestoreId);

			if (defaultProducts.map(product => product.name).includes(editedProduct.name)) {
				// setDefaultProducts(prevProducts => [
				// 	...prevProducts.slice(0, productIndex),
				// 	{
				// 		...prevProducts[productIndex],
				// 		userCategory: editedProduct.category,
				// 		quantity: editedProduct.quantity,
				// 		unit: editedProduct.unit,
				// 	},
				// 	...prevProducts.slice(productIndex + 1),
				// ]);

				await updateDoc(productRef, {
					userCategory: editedProduct.category,
					quantity: editedProduct.quantity,
					unit: editedProduct.unit,
				});
			} else {
				// setDefaultProducts(prevProducts => [
				// 	...prevProducts.slice(0, productIndex),
				// 	{
				// 		...prevProducts[productIndex],
				// 		quantity: -1,
				// 		unit: '',
				// 		isBought: false,
				// 	},
				// 	...prevProducts.slice(productIndex + 1),
				// ]);
				// setCustomProducts(prevProducts => [...prevProducts, { ...editedProduct, id: uuid() }]);
				await updateDoc(productRef, {
					quantity: -1,
					unit: '',
					isBought: false,
				});
				const id = uuid();
				await setDoc(doc(db, 'customProducts', id), {
					...editedProduct,
					firestoreId: id,
					id,
				});
			}
		}
	};

	const updateProductsQuantity = async (firebaseId: string, productId: number | string, quantityChanger: 1 | -1) => {
		if (typeof productId === 'number') {
			const productRef = doc(db, 'defaultProducts', firebaseId);
			const product = (await getDoc(productRef)).data()!;
			await updateDoc(productRef, {
				quantity: increment(quantityChanger),
				unit: product.quantity + quantityChanger < 0 ? '' : product.unit,
			});

			// setDefaultProducts(prevProducts => [
			// 	...prevProducts.slice(0, productId - 1),
			// 	{
			// 		...prevProducts[productId - 1],
			// 		quantity: prevProducts[productId - 1].quantity + quantityChanger,
			// 		unit: prevProducts[productId - 1].quantity + quantityChanger < 0 ? '' : prevProducts[productId - 1].unit,
			// 	},
			// 	...prevProducts.slice(productId),
			// ]);
		} else {
			const productRef = doc(db, 'customProducts', firebaseId);
			const product = (await getDoc(productRef)).data()!;
			await updateDoc(productRef, {
				quantity: increment(quantityChanger),
				unit: product.quantity + quantityChanger < 0 ? '' : product.unit,
			});

			// const checkedProductIndex = customProducts.map(product => product.id).indexOf(productId);

			// setCustomProducts(prevProducts => [
			// 	...prevProducts.slice(0, checkedProductIndex),
			// 	{
			// 		...prevProducts[checkedProductIndex],
			// 		quantity: prevProducts[checkedProductIndex].quantity + quantityChanger,
			// 		unit: prevProducts[checkedProductIndex].quantity + quantityChanger < 0 ? '' : prevProducts[checkedProductIndex - 1].unit,
			// 	},
			// 	...prevProducts.slice(checkedProductIndex + 1),
			// ]);
		}
	};

	const updateProductCategory = async (
		categoryChangeProductId: { id: string | number; firestoreId: string } | null,
		clickedCategory: { name: string; imgSrc: string }
	) => {
		if (typeof categoryChangeProductId?.id === 'string') {
			const productRef = doc(db, 'customProducts', categoryChangeProductId.firestoreId);
			await updateDoc(productRef, {
				category: clickedCategory,
			});

			// const productIndex = customProducts.map(product => product.id).indexOf(categoryChangeProductId);
			// setCustomProducts(prevProducts => [
			// 	...prevProducts.slice(0, productIndex),
			// 	{
			// 		...prevProducts[productIndex],
			// 		category: {
			// 			name: clickedCategory.name,
			// 			imgSrc: clickedCategory.imgSrc,
			// 		},
			// 	},
			// 	...prevProducts.slice(productIndex + 1),
			// ]);
		} else if (typeof categoryChangeProductId?.id === 'number') {
			const productRef = doc(db, 'defaultProducts', categoryChangeProductId.firestoreId);
			await updateDoc(productRef, {
				userCategory: clickedCategory,
			});

			// const productIndex = defaultProducts.map(product => product.id).indexOf(categoryChangeProductId);
			// setDefaultProducts(prevProducts => [
			// 	...prevProducts.slice(0, productIndex),
			// 	{
			// 		...prevProducts[productIndex],
			// 		userCategory: {
			// 			name: clickedCategory.name,
			// 			imgSrc: clickedCategory.imgSrc,
			// 		},
			// 	},
			// 	...prevProducts.slice(productIndex + 1),
			// ]);
		}
	};

	const updateCustomProductsQuantity = async (customProduct: CustomProductType) => {
		if (customProduct.name === '') return;

		const customProductsList = (await getDocs(collection(db, 'customProducts'))).docs.map(
			product =>
				({
					firestoreId: product.id,
					...product.data(),
				} as ProductType)
		);

		const checkedProductIndex = customProductsList.map(product => product.name).indexOf(customProduct.name);
		// const firestoreId = checkedProductIndex >= 0 ? customProductsList[checkedProductIndex].firestoreId : null;

		if (customProductsList.length > 0 && checkedProductIndex >= 0) {
			const firestoreId = customProductsList[checkedProductIndex].firestoreId;
			const productRef = doc(db, 'customProducts', firestoreId);
			await updateDoc(productRef, {
				quantity: customProduct.quantity,
			});
		} else {
			// await addDoc(collection(db, 'customProducts'), {
			// 	...customProduct,
			// });
			const id = uuid();
			await setDoc(doc(db, 'customProducts', id), {
				id,
				...customProduct,
			});
		}
		// const customProductRef = doc()

		// const checkedProductIndex = customProducts.map(product => product.name).indexOf(customProduct.name);

		// if (customProducts.length !== 0 && checkedProductIndex >= 0) {
		// 	setCustomProducts(prevProducts => [
		// 		...prevProducts.slice(0, checkedProductIndex),
		// 		{
		// 			...prevProducts[checkedProductIndex],
		// 			quantity: customProduct.quantity,
		// 		},
		// 		...prevProducts.slice(checkedProductIndex + 1),
		// 	]);
		// } else {
		// 	setCustomProducts(prevProducts => [{ id: uuid(), ...customProduct }, ...prevProducts]);
		// }
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
