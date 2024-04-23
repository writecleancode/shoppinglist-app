import { createContext, useState } from 'react';
import { EditProductContextType, EditProductProviderProps, ProductType } from 'src/types/types';

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
	editedProduct: initialEditState,
	setEditedProduct: () => {},
});

export const EditProductProvider = ({ children }: EditProductProviderProps) => {
	const [editedProduct, setEditedProduct] = useState<ProductType>(initialEditState);

	return (
		<EditProductContext.Provider
			value={{
				editedProduct,
				setEditedProduct,
			}}>
			{children}
		</EditProductContext.Provider>
	);
};
