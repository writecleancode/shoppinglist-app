import { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { products } from 'src/data/products';
import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ProductsList } from 'src/components/organisms/ProductsList/ProductsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { AddProducts } from './AddProducts';
import { EditPanel } from 'src/components/molecules/EditPanel/EditPanel';
import { ChangeCategoryPanel } from 'src/components/molecules/ChangeCategory/ChangeCategoryPanel';
import { Wrapper } from './MainView.styles';
import { ProductType } from 'src/types/types';
import { ProductsContext } from 'src/providers/ProductsProvider';

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

export const MainView = () => {
	const { defaultProducts, customProducts, productsList, setDefaultProducts, setCustomProducts, setProductsList } =
		useContext(ProductsContext);
	const [editedProduct, setEditedProduct] = useState(initialEditState);
	const [highlightedCategory, setHighlightedCategory] = useState('');
	const [categoryChangeProductId, setCategoryChangeProductId] = useState(null);
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
				console.log(productIndex);
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

	const handleSaveChangesButton = () => {
		if (typeof editedProduct.id === 'string') {
			const productIndex = customProducts.map(product => product.id).indexOf(editedProduct.id);
			setCustomProducts(prevProducts => [
				...prevProducts.slice(0, productIndex),
				editedProduct,
				...prevProducts.slice(productIndex + 1),
			]);
		} else if (typeof editedProduct.id === 'number') {
			const productIndex = defaultProducts.map(product => product.id).indexOf(editedProduct.id);

			if (defaultProducts.map(product => product.name).includes(editedProduct.name)) {
				setDefaultProducts(prevProducts => [
					...prevProducts.slice(0, productIndex),
					{
						...prevProducts[productIndex],
						category: editedProduct.category,
						quantity: editedProduct.quantity,
						unit: editedProduct.unit,
					},
					...prevProducts.slice(productIndex + 1),
				]);
			} else {
				setDefaultProducts(prevProducts => [
					...prevProducts.slice(0, productIndex),
					{
						...prevProducts[productIndex],
						quantity: -1,
						unit: '',
						isBought: false,
					},
					...prevProducts.slice(productIndex + 1),
				]);
				setCustomProducts(prevProducts => [...prevProducts, { ...editedProduct, id: uuid() }]);
			}
		}

		closeEditPanel();
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
			<ProductsList
				productsList={productsList}
				openEditPanel={openEditPanel}
				setEditedProduct={setEditedProduct}
				openCategoryPanel={openCategoryPanel}
			/>
			<AddButton onClick={showAddProductView} />
			<AddProducts isActive={isAddProductActive} hideAddProductView={hideAddProductView} />
			<EditPanel
				isOpen={isEditPanelOpen}
				closeEditPanel={closeEditPanel}
				editedProduct={editedProduct}
				setEditedProduct={setEditedProduct}
				openCategoryPanel={openCategoryPanel}
				handleSaveChangesButton={handleSaveChangesButton}
			/>
			<ChangeCategoryPanel
				isOpen={isCategoryPanelOpen}
				closeCategoryPanel={closeCategoryPanel}
				highlightedCategory={highlightedCategory}
				handleChangeCategory={handleChangeCategory}
			/>
		</Wrapper>
	);
};
