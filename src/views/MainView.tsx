import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { EditProductContext, actionTypes } from 'src/providers/EditProductProvider';
import { ChangeCategoryContext } from 'src/providers/ChangeCategoryProvider';
import { products } from 'src/data/products';
import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ProductsList } from 'src/components/organisms/ProductsList/ProductsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { AddProducts } from './AddProducts';
import { EditPanel } from 'src/components/molecules/EditPanel/EditPanel';
import { ChangeCategoryPanel } from 'src/components/molecules/ChangeCategory/ChangeCategoryPanel';
import { Wrapper } from './MainView.styles';

export const MainView = () => {
	const [isAddProductActive, setAddProductState] = useState(false);
	const {
		defaultProducts,
		customProducts,
		productsList,
		setDefaultProducts,
		setProductsList,
		countShoppingProgress,
		updateProductCategory,
	} = useContext(ProductsContext);
	const { isEditPanelOpen, closeEditPanel, dispatch } = useContext(EditProductContext);
	const { isCategoryPanelOpen, categoryChangeProductId, closeCategoryPanel, setCategoryChangeProductId } =
		useContext(ChangeCategoryContext);

	const showAddProductView = () => setAddProductState(true);
	const hideAddProductView = () => setAddProductState(false);

	const handleClosePanels = (e: KeyboardEvent) => {
		if (e.key !== 'Escape') return;

		if (isCategoryPanelOpen) {
			closeCategoryPanel();
			return;
		}

		closeEditPanel();
	};

	const handleChangeCategory = (clickedCategory: { name: string; imgSrc: string }) => {
		if (categoryChangeProductId) {
			updateProductCategory(categoryChangeProductId, clickedCategory);
			setCategoryChangeProductId(null);
		} else {
			dispatch({
				type: actionTypes.updateCategory,
				categoryName: clickedCategory.name,
				categoryImgSrc: clickedCategory.imgSrc,
			});
		}

		closeCategoryPanel();
	};

	useEffect(() => {
		setDefaultProducts(products);
	}, []);

	useEffect(() => {
		setProductsList([...defaultProducts, ...customProducts]);
	}, [defaultProducts, customProducts]);

	useEffect(() => {
		countShoppingProgress();
	}, [productsList]);

	useEffect(() => {
		window.addEventListener('keydown', handleClosePanels);

		return () => window.removeEventListener('keydown', handleClosePanels);
	}, [isEditPanelOpen, isCategoryPanelOpen]);

	return (
		<Wrapper>
			<div>
				<Header />
				<ProgressBar />
			</div>
			<ProductsList productsList={productsList} />
			<AddButton onClick={showAddProductView} />
			<AddProducts isActive={isAddProductActive} hideAddProductView={hideAddProductView} />
			<EditPanel />
			<ChangeCategoryPanel handleChangeCategory={handleChangeCategory} />
		</Wrapper>
	);
};
