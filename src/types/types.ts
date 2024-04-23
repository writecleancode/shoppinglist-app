import { ReactNode } from 'react';

export type ProductType = {
	id: number | string;
	name: string;
	category: {
		name: string;
		imgSrc: string;
	};
	quantity: number;
	unit: string;
	isBought: boolean;
};

export type ProductsContextType = {
	defaultProducts: never[] | ProductType[];
	customProducts: never[] | ProductType[];
	productsList: never[] | ProductType[];
	setDefaultProducts: React.Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	setCustomProducts: React.Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	setProductsList: React.Dispatch<React.SetStateAction<never[] | ProductType[]>>;
};

export type EditProductContextType = {
	editedProduct: ProductType;
	setEditedProduct: React.Dispatch<React.SetStateAction<ProductType>>;
};

export type ChangeCategoryContextType = {
	highlightedCategory: string;
	categoryChangeProductId: string | null;
	setHighlightedCategory: React.Dispatch<React.SetStateAction<string>>;
	setCategoryChangeProductId: React.Dispatch<React.SetStateAction<null>>;
};

export type ProductsProviderProps = {
	children: ReactNode;
};

export type EditProductProviderProps = {
	children: ReactNode;
};

export type ChangeCategoryProviderProps = {
	children: ReactNode;
};
