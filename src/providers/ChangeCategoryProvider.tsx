import { createContext, useState } from 'react';
import { ChangeCategoryContextType, ChangeCategoryProviderProps } from 'src/types/types';

const initialCategoryPanelState = false;

export const ChangeCategoryContext = createContext<ChangeCategoryContextType>({
	isCategoryPanelOpen: initialCategoryPanelState,
	highlightedCategory: '',
	categoryChangeProductId: null,
	openCategoryPanel: () => {},
	closeCategoryPanel: () => {},
	setHighlightedCategory: () => {},
	setCategoryChangeProductId: () => {},
});

export const ChangeCategoryProvider = ({ children }: ChangeCategoryProviderProps) => {
	const [isCategoryPanelOpen, setCategoryPanelState] = useState(initialCategoryPanelState);
	const [highlightedCategory, setHighlightedCategory] = useState('');
	const [categoryChangeProductId, setCategoryChangeProductId] = useState<null | string | number>(null);

	const openCategoryPanel = (clickedCategory: string, clickedId?: number | string) => {
		setCategoryPanelState(true);
		document.getElementById('changeCategoryPanel')!.focus();
		setHighlightedCategory(clickedCategory);

		clickedId && setCategoryChangeProductId(clickedId);
	};

	const closeCategoryPanel = () => {
		setCategoryPanelState(false);
		setHighlightedCategory('');
	};

	return (
		<ChangeCategoryContext.Provider
			value={{
				isCategoryPanelOpen,
				highlightedCategory,
				categoryChangeProductId,
				openCategoryPanel,
				closeCategoryPanel,
				setHighlightedCategory,
				setCategoryChangeProductId,
			}}>
			{children}
		</ChangeCategoryContext.Provider>
	);
};
