import { useEffect, useState } from 'react';
import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ProductsList } from 'src/components/organisms/ProductsList/ProductsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { AddProducts } from './AddProducts';
import { Wrapper } from './MainView.styles';
import { products } from 'src/data/products';
import { EditPanel } from 'src/components/molecules/EditPanel/EditPanel';
import { ChangeCategoryPanel } from 'src/components/molecules/ChangeCategory/ChangeCategoryPanel';

export type ProductType = {
	id: number | string;
	name: string;
	category: {
		name: string;
		imgSrc: string;
	};
	quantity: number;
	unit: string;
	isBought: boolean;
};

const initialEditState = {
	id: 'abc123',
	name: 'product name',
	category: {
		name: 'cakes, desserts, additives',
		imgSrc: 'src/assets/img/category-icons/other.png',
	},
	quantity: -1,
	unit: '',
	isBought: false,
};

export const MainView = () => {
	const [isAddProductActive, setAddProductState] = useState(false);
	const [defaultProducts, setDefaultProducts] = useState<never[] | ProductType[]>([]);
	const [customProducts, setCustomProducts] = useState<never[] | ProductType[]>([]);
	const [productsList, setProductsList] = useState<never[] | ProductType[]>([]);
	const [shoppingProgress, setShoppingProgress] = useState(0);
	const [isEditPanelOpen, setEditPanelState] = useState(false);
	const [isCategoryPanelOpen, setCategoryPanelState] = useState(false);
	const [editedProduct, setEditedProduct] = useState(initialEditState);
	const [highlightedCategory, setHighlightedCategory] = useState('');

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

	const openCategoryPanel = (clickedCategory: string) => {
		setCategoryPanelState(true);
		document.getElementById('changeCategoryPanel')!.focus();
		setHighlightedCategory(clickedCategory);
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

	const handleSaveChangesButton = () => {
		if (typeof editedProduct.id === 'string') {
			const productIndex = customProducts.map(product => product.id).indexOf(editedProduct.id);
			setCustomProducts(prevProducts => [
				...prevProducts.slice(0, productIndex),
				editedProduct,
				...prevProducts.slice(productIndex + 1),
			]);
		} else if (typeof editedProduct.id === 'number') {
			console.log('number');
		}

		closeEditPanel();
	};

	useEffect(() => {
		window.addEventListener('keydown', handleClosePanels);

		return () => window.removeEventListener('keydown', handleClosePanels);
	}, [isEditPanelOpen, isCategoryPanelOpen]);

	useEffect(() => {
		setDefaultProducts(products);
	}, []);

	useEffect(() => {
		countShoppingProgress();
	}, [productsList]);

	useEffect(() => {
		setProductsList([...defaultProducts, ...customProducts]);
	}, [defaultProducts, customProducts]);

	return (
		<Wrapper>
			<div>
				<Header />
				<ProgressBar currentProgress={shoppingProgress} />
			</div>
			<ProductsList
				productsToBuy={defaultProducts}
				setProductsToBuy={setDefaultProducts}
				productsList={productsList}
				setDefaultProducts={setDefaultProducts}
				setCustomProducts={setCustomProducts}
				customProducts={customProducts}
				openEditPanel={openEditPanel}
				setEditedProduct={setEditedProduct}
				openCategoryPanel={openCategoryPanel}
			/>
			<AddButton onClick={showAddProductView} />
			<AddProducts
				defaultProducts={defaultProducts}
				setDefaultProducts={setDefaultProducts}
				isActive={isAddProductActive}
				hideAddProductView={hideAddProductView}
				customProducts={customProducts}
				setCustomProducts={setCustomProducts}
				productsList={productsList}
				setProductsList={setProductsList}
			/>
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
			/>
		</Wrapper>
	);
};
