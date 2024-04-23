import { createContext, useState } from 'react';
import { ChangeCategoryContextType, ChangeCategoryProviderProps } from 'src/types/types';

export const ChangeCategoryContext = createContext<ChangeCategoryContextType>({
	highlightedCategory: '',
	categoryChangeProductId: null,
	setHighlightedCategory: () => {},
	setCategoryChangeProductId: () => {},
});

export const ChangeCategoryProvider = ({ children }: ChangeCategoryProviderProps) => {
	const [highlightedCategory, setHighlightedCategory] = useState('');
	const [categoryChangeProductId, setCategoryChangeProductId] = useState(null);

	return (
		<ChangeCategoryContext.Provider
			value={{
				highlightedCategory,
				categoryChangeProductId,
				setHighlightedCategory,
				setCategoryChangeProductId,
			}}>
			{children}
		</ChangeCategoryContext.Provider>
	);
};
