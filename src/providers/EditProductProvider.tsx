import { createContext, useReducer, useState } from 'react';
import { EditProductContextType, EditProductProviderProps, ProductType } from 'src/types/types';

const initialEditPanelState = false;

const initialEditState = {
	firestoreId: 'abc123',
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

export const actionTypes = {
	setEditedProduct: 'SET CLIKED PRODUCT AS EDITED PRODUCT',
	inputChange: 'INPUT CHANGE',
	quantityChange: 'QUANTITY CHANGE',
	quantityButtonChange: 'QUANTITY CHANGE BY BUTTONS',
	unitButtonsChange: 'UNIT CHANGE BY BUTTONS',
	updateCategory: 'UPDATE CATEGORY',
};

const reducer = (state: ProductType, action: Record<string, any>) => {
	switch (action.type) {
		case actionTypes.setEditedProduct:
			return {
				firestoreId: action.firestoreId,
				id: action.id,
				name: action.name,
				category: {
					name: action.userCategory ? action.userCategory.name : action.category.name,
					imgSrc: action.userCategory ? action.userCategory.imgSrc : action.category.imgSrc,
				},
				quantity: action.quantity,
				unit: action.unit,
				isBought: action.isBought,
			};

		case actionTypes.inputChange: {
			return {
				...state,
				[action.key]: action.value,
			};
		}

		case actionTypes.quantityChange: {
			return {
				...state,
				quantity: Number(action.value),
			};
		}

		case actionTypes.quantityButtonChange:
			return {
				...state,
				quantity: state.quantity + action.quantityChanger,
			};

		case actionTypes.unitButtonsChange:
			return {
				...state,
				unit: action.unit,
			};

		case actionTypes.updateCategory: {
			return {
				...state,
				category: {
					name: action.categoryName,
					imgSrc: action.categoryImgSrc,
				},
			};
		}

		default:
			return state;
	}
};

export const EditProductContext = createContext<EditProductContextType>({
	isEditPanelOpen: initialEditPanelState,
	editedProduct: initialEditState,
	openEditPanel: () => {},
	closeEditPanel: () => {},
	dispatch: () => {},
});

export const EditProductProvider = ({ children }: EditProductProviderProps) => {
	const [isEditPanelOpen, setEditPanelState] = useState(initialEditPanelState);
	const [editedProduct, dispatch] = useReducer(reducer, initialEditState);

	const openEditPanel = () => setEditPanelState(true);
	const closeEditPanel = () => setEditPanelState(false);

	return (
		<EditProductContext.Provider
			value={{
				isEditPanelOpen,
				editedProduct,
				openEditPanel,
				closeEditPanel,
				dispatch,
			}}>
			{children}
		</EditProductContext.Provider>
	);
};
