import { createContext, useState } from 'react';
import { ProductType, ProductsContextType, ProductsProviderProps } from 'src/types/types';

export const ProductsContext = createContext<ProductsContextType>({
	defaultProducts: [],
	customProducts: [],
	productsList: [],
	setDefaultProducts: () => {},
	setCustomProducts: () => {},
	setProductsList: () => {},
});

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const [defaultProducts, setDefaultProducts] = useState<never[] | ProductType[]>([]);
	const [customProducts, setCustomProducts] = useState<never[] | ProductType[]>([]);
	const [productsList, setProductsList] = useState<never[] | ProductType[]>([]);

	return (
		<ProductsContext.Provider
			value={{
				defaultProducts,
				setDefaultProducts,
				customProducts,
				setCustomProducts,
				productsList,
				setProductsList,
			}}>
			{children}
		</ProductsContext.Provider>
	);
};
