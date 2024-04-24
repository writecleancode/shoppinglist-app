import { createContext, useState } from 'react';
import { ProductType, ProductsContextType, ProductsProviderProps } from 'src/types/types';

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
			}}>
			{children}
		</ProductsContext.Provider>
	);
};
