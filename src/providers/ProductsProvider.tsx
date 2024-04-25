import { createContext, useState } from 'react';
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

	const handleBoughtStatus = (productId: number | string, isBought: boolean) => {
		const timeoutValue = isBought ? 400 : 650;

		if (typeof productId === 'number') {
			setTimeout(() => {
				setDefaultProducts(prevProducts => [
					...prevProducts.slice(0, productId - 1),
					{
						...prevProducts[productId - 1],
						isBought: !prevProducts[productId - 1].isBought,
					},
					...prevProducts.slice(productId),
				]);
			}, timeoutValue);
		} else {
			setTimeout(() => {
				const checkedProductIndex = customProducts.map(product => product.id).indexOf(productId);

				setCustomProducts(prevProducts => [
					...prevProducts.slice(0, checkedProductIndex),
					{
						...prevProducts[checkedProductIndex],
						isBought: !prevProducts[checkedProductIndex].isBought,
					},
					...prevProducts.slice(checkedProductIndex + 1),
				]);
			}, timeoutValue);
		}
	};

	const removeBoughtProducts = () => {
		const filteredCustomProducts = customProducts.filter(product => product.isBought === false);
		const resetDefaultProducts = defaultProducts.map(product => {
			if (product.isBought === true) {
				return {
					id: product.id,
					name: product.name,
					category: product.category,
					quantity: -1,
					unit: '',
					isBought: false,
				};
			} else {
				return product;
			}
		});
		setCustomProducts(filteredCustomProducts);
		setDefaultProducts(resetDefaultProducts);
	};

	const updateProductsList = (editedProduct: ProductType) => {
		if (typeof editedProduct.id === 'string') {
			const productIndex = customProducts.map(product => product.id).indexOf(editedProduct.id);
			setCustomProducts(prevProducts => [
				...prevProducts.slice(0, productIndex),
				editedProduct,
				...prevProducts.slice(productIndex + 1),
			]);
		} else if (typeof editedProduct.id === 'number') {
			const productIndex = defaultProducts.map(product => product.id).indexOf(editedProduct.id);

			if (defaultProducts.map(product => product.name).includes(editedProduct.name)) {
				setDefaultProducts(prevProducts => [
					...prevProducts.slice(0, productIndex),
					{
						...prevProducts[productIndex],
						userCategory: editedProduct.category,
						quantity: editedProduct.quantity,
						unit: editedProduct.unit,
					},
					...prevProducts.slice(productIndex + 1),
				]);
			} else {
				setDefaultProducts(prevProducts => [
					...prevProducts.slice(0, productIndex),
					{
						...prevProducts[productIndex],
						quantity: -1,
						unit: '',
						isBought: false,
					},
					...prevProducts.slice(productIndex + 1),
				]);
				setCustomProducts(prevProducts => [...prevProducts, { ...editedProduct, id: uuid() }]);
			}
		}
	};

	const updateProductCategory = (
		categoryChangeProductId: string | number | null,
		clickedCategory: { name: string; imgSrc: string }
	) => {
		if (typeof categoryChangeProductId === 'string') {
			const productIndex = customProducts.map(product => product.id).indexOf(categoryChangeProductId);
			setCustomProducts(prevProducts => [
				...prevProducts.slice(0, productIndex),
				{
					...prevProducts[productIndex],
					category: {
						name: clickedCategory.name,
						imgSrc: clickedCategory.imgSrc,
					},
				},
				...prevProducts.slice(productIndex + 1),
			]);
		} else if (typeof categoryChangeProductId === 'number') {
			const productIndex = defaultProducts.map(product => product.id).indexOf(categoryChangeProductId);
			setDefaultProducts(prevProducts => [
				...prevProducts.slice(0, productIndex),
				{
					...prevProducts[productIndex],
					userCategory: {
						name: clickedCategory.name,
						imgSrc: clickedCategory.imgSrc,
					},
				},
				...prevProducts.slice(productIndex + 1),
			]);
		}
	};

	const updateCustomProductsQuantity = (customProduct: CustomProductType) => {
		if (customProduct.name === '') return;

		const checkedProductIndex = customProducts.map(product => product.name).indexOf(customProduct.name);

		if (customProducts.length !== 0 && checkedProductIndex >= 0) {
			setCustomProducts(prevProducts => [
				...prevProducts.slice(0, checkedProductIndex),
				{ ...prevProducts[checkedProductIndex], quantity: customProduct.quantity },
				...prevProducts.slice(checkedProductIndex + 1),
			]);
		} else {
			setCustomProducts(prevProducts => [{ id: uuid(), ...customProduct }, ...prevProducts]);
		}
	};

	return (
		<ProductsContext.Provider
			value={{
				defaultProducts,
				setDefaultProducts,
				customProducts,
				shoppingProgress,
				setCustomProducts,
				productsList,
				setProductsList,
				countShoppingProgress,
				handleBoughtStatus,
				removeBoughtProducts,
				updateProductsList,
				updateProductCategory,
				updateCustomProductsQuantity,
			}}>
			{children}
		</ProductsContext.Provider>
	);
};
