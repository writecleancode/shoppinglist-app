import { ReactNode } from 'react';

export type ProductType = {
	id: number | string;
	name: string;
	category: {
		name: string;
		imgSrc: string;
	};
	userCategory?: {
		name: string;
		imgSrc: string;
	};
	quantity: number;
	unit: string;
	isBought: boolean;
};

export type ChangeCategoryContextType = {
	isCategoryPanelOpen: boolean;
	highlightedCategory: string;
	categoryChangeProductId: string | number | null;
	openCategoryPanel: (clickedCategory: string, clickedId?: number | string) => void;
	closeCategoryPanel: () => void;
	setHighlightedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type EditProductContextType = {
	isEditPanelOpen: boolean;
	editedProduct: ProductType;
	openEditPanel: () => void;
	closeEditPanel: () => void;
	dispatch: React.Dispatch<any>;
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
	handleBoughtStatus: (productId: number | string, isBought: boolean) => void;
	removeBoughtProducts: () => void;
	updateProductsList: (editedProduct: ProductType) => void;
	updateProductCategory: (
		categoryChangeProductId: string | number | null,
		clickedCategory: { name: string; imgSrc: string }
	) => void;
};

export type BoughtProductsProps = {
	productsList: ProductType[];
};

export type ChangeCategoryProviderProps = {
	children: ReactNode;
};

export type EditProductProviderProps = {
	children: ReactNode;
};

export type ProductsListProps = {
	productsList: ProductType[];
};

export type ProductListItemProps = {
	product: ProductType;
};

export type ProductsProviderProps = {
	children: ReactNode;
};

export type ProductsToBuyProps = {
	productsList: ProductType[];
};

export type StatusButtonProps = {
	isBought: boolean;
	animationType: string;
	onClick: any;
};
