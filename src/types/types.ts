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
	shoppingProgress: number;
	setDefaultProducts: React.Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	setCustomProducts: React.Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	setProductsList: React.Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	countShoppingProgress: () => void;
	removeBoughtProducts: () => void;
};

export type EditProductContextType = {
	isEditPanelOpen: boolean;
	editedProduct: ProductType;
	openEditPanel: () => void;
	closeEditPanel: () => void;
	setEditedProduct: React.Dispatch<React.SetStateAction<ProductType>>;
};

export type ChangeCategoryContextType = {
	isCategoryPanelOpen: boolean;
	highlightedCategory: string;
	categoryChangeProductId: string | number | null;
	openCategoryPanel: (clickedCategory: string, clickedId?: number | string) => void;
	closeCategoryPanel: () => void;
	setHighlightedCategory: React.Dispatch<React.SetStateAction<string>>;
	setCategoryChangeProductId: React.Dispatch<React.SetStateAction<string | number | null>>;
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
