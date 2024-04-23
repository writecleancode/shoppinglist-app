import { createContext, useState } from 'react';
import { EditProductContextType, EditProductProviderProps, ProductType } from 'src/types/types';

const initialEditPanelState = false;

const initialEditState = {
	id: 'abc123',
	name: 'product name',
	category: {
		name: 'other',
		imgSrc: 'src/assets/img/category-icons/other.png',
	},
	quantity: -1,
	unit: '',
	isBought: false,
};

export const EditProductContext = createContext<EditProductContextType>({
	isEditPanelOpen: initialEditPanelState,
	editedProduct: initialEditState,
	openEditPanel: () => {},
	closeEditPanel: () => {},
	setEditedProduct: () => {},
});

export const EditProductProvider = ({ children }: EditProductProviderProps) => {
	const [isEditPanelOpen, setEditPanelState] = useState(initialEditPanelState);
	const [editedProduct, setEditedProduct] = useState<ProductType>(initialEditState);

	const openEditPanel = () => {
		setEditPanelState(true);
		document.getElementById('editPanel')!.focus();
	};

	const closeEditPanel = () => {
		setEditPanelState(false);
	};

	return (
		<EditProductContext.Provider
			value={{
				isEditPanelOpen,
				editedProduct,
				openEditPanel,
				closeEditPanel,
				setEditedProduct,
			}}>
			{children}
		</EditProductContext.Provider>
	);
};
