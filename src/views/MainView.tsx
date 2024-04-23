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
	const { defaultProducts, customProducts, productsList, setDefaultProducts, setCustomProducts, setProductsList } =
		useContext(ProductsContext);
	const { setEditedProduct } = useContext(EditProductContext);
	const { highlightedCategory, categoryChangeProductId, setHighlightedCategory, setCategoryChangeProductId } =
		useContext(ChangeCategoryContext);
	const [isAddProductActive, setAddProductState] = useState(false);
	const [isEditPanelOpen, setEditPanelState] = useState(false);
	const [isCategoryPanelOpen, setCategoryPanelState] = useState(false);
	const [shoppingProgress, setShoppingProgress] = useState(0);

	const showAddProductView = () => setAddProductState(true);
	const hideAddProductView = () => setAddProductState(false);

	const countShoppingProgress = () => {
		let productToBuy = 0;
		let boughtProducts = 0;

		for (let i = 0; i < productsList.length; i++) {
			if (productsList[i].quantity >= 0) productToBuy++;
		}

		for (let i = 0; i < productsList.length; i++) {
			if (productsList[i].quantity >= 0 && productsList[i].isBought === true) {
				boughtProducts++;
			}
		}

		const boughtProductsPercentage = Math.round((boughtProducts / productToBuy) * 100);

		setShoppingProgress(boughtProductsPercentage);
	};

	const openEditPanel = () => {
		setEditPanelState(true);
		document.getElementById('editPanel')!.focus();
	};

	const closeEditPanel = () => {
		setEditPanelState(false);
		setHighlightedCategory('');
	};

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

	const handleClosePanels = e => {
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

	const removeBoughtProducts = () => {
		const filteredCustomProducts = customProducts.filter(product => product.isBought === false);
		const resetDefaultProducts = defaultProducts.map(product => {
			if (product.isBought === true) {
				return {
					id: product.id,
					name: product.name,
					category: product.category,
					quantity: -1,
					unit: '',
					isBought: false,
				};
			} else {
				return product;
			}
		});
		setCustomProducts(filteredCustomProducts);
		setDefaultProducts(resetDefaultProducts);
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
				<Header removeBoughtProducts={removeBoughtProducts} />
				<ProgressBar currentProgress={shoppingProgress} />
			</div>
			<ProductsList productsList={productsList} openEditPanel={openEditPanel} openCategoryPanel={openCategoryPanel} />
			<AddButton onClick={showAddProductView} />
			<AddProducts isActive={isAddProductActive} hideAddProductView={hideAddProductView} />
			<EditPanel isOpen={isEditPanelOpen} closeEditPanel={closeEditPanel} openCategoryPanel={openCategoryPanel} />
			<ChangeCategoryPanel
				isOpen={isCategoryPanelOpen}
				closeCategoryPanel={closeCategoryPanel}
				highlightedCategory={highlightedCategory}
				handleChangeCategory={handleChangeCategory}
			/>
		</Wrapper>
	);
};
