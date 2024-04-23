import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { EditProductContext } from 'src/providers/EditProductProvider';
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
		setCustomProducts,
		setProductsList,
		countShoppingProgress,
	} = useContext(ProductsContext);
	const { isEditPanelOpen, closeEditPanel, setEditedProduct } = useContext(EditProductContext);
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

	const handleChangeCategory = clickedCategory => {
		if (categoryChangeProductId) {
			if (typeof categoryChangeProductId === 'string') {
				const productIndex = customProducts.map(product => product.id).indexOf(categoryChangeProductId);
				setCustomProducts(prevProducts => [
					...prevProducts.slice(0, productIndex),
					{
						...prevProducts[productIndex],
						category: {
							name: clickedCategory.name,
							imgSrc: clickedCategory.imgSrc,
						},
					},
					...prevProducts.slice(productIndex + 1),
				]);
			} else if (typeof categoryChangeProductId === 'number') {
				const productIndex = defaultProducts.map(product => product.id).indexOf(categoryChangeProductId);
				setDefaultProducts(prevProducts => [
					...prevProducts.slice(0, productIndex),
					{
						...prevProducts[productIndex],
						userCategory: {
							name: clickedCategory.name,
							imgSrc: clickedCategory.imgSrc,
						},
					},
					...prevProducts.slice(productIndex + 1),
				]);
			}

			setCategoryChangeProductId(null);
		} else {
			setEditedProduct(prevProduct => ({
				...prevProduct,
				category: {
					name: clickedCategory.name,
					imgSrc: clickedCategory.imgSrc,
				},
			}));
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
