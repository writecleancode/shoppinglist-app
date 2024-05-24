import { Dispatch, ReactNode } from 'react';

export type CustomProductType = {
	name: string;
	category: {
		name: string;
		imgSrc: string;
	};
	quantity: number;
	unit: string;
	isBought: boolean;
};

export type ProductType = {
	firestoreId: string;
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
	categoryChangeProductId: null | { id: string | number; firestoreId: string } | null;
	openCategoryPanel: (clickedCategory: string, clickedId?: number | string, firestoreId?: string) => void;
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
	handleBoughtStatus: (firestoreId: string, productId: number | string, isBought: boolean) => void;
	removeBoughtProducts: () => void;
	updateProductsList: (editedProduct: ProductType) => void;
	updateProductsQuantity: (firebaseId: string, productId: number | string, quantityChanger: 1 | -1) => void;
	updateProductCategory: (
		categoryChangeProductId: { id: string | number; firestoreId: string } | null,
		clickedCategory: { name: string; imgSrc: string }
	) => void;
	updateCustomProductsQuantity: (customProduct: CustomProductType) => void;
};

export type AddProductsProps = {
	isActive: boolean;
	hideAddProductView: () => void;
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

export type ProductsToAddListProps = {
	products: ProductType[];
	customProduct: CustomProductType;
	clearInput: () => void;
	setProductsToAdd: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	setCustomProduct: Dispatch<React.SetStateAction<CustomProductType>>;
};

export type ProductsToBuyProps = {
	productsList: ProductType[];
};

export type StatusButtonProps = {
	isBought: boolean;
	animationType: string;
	onClick: any;
};
