import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { EditProductContext } from 'src/providers/EditProductProvider';
import { ChangeCategoryContext } from 'src/providers/ChangeCategoryProvider';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from 'src/firebase';
import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { LoadingGif } from 'src/components/atoms/LoadingGif/LoadingGif';
import { ProductsList } from 'src/components/organisms/ProductsList/ProductsList';
import { EmptyShoppingList } from 'src/components/molecules/EmptyShoppingList/EmptyShoppingList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { AddProducts } from './AddProducts';
import { EditPanel } from 'src/components/molecules/EditPanel/EditPanel';
import { ChangeCategoryPanel } from 'src/components/molecules/ChangeCategory/ChangeCategoryPanel';
import { Wrapper } from './MainView.styles';
import { ProductType } from 'src/types/types';

export const MainView = () => {
	const [isAddProductActive, setAddProductState] = useState(false);
	const { defaultProducts, customProducts, productsList, setDefaultProducts, setCustomProducts, setProductsList, countShoppingProgress } =
		useContext(ProductsContext);
	const { isEditPanelOpen, closeEditPanel } = useContext(EditProductContext);
	const { isCategoryPanelOpen, closeCategoryPanel } = useContext(ChangeCategoryContext);

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

	useEffect(() => {
		const productsQuery = query(collection(db, 'defaultProducts'));
		const unsub = onSnapshot(productsQuery, productsSnapshot => {
			const productsList = productsSnapshot.docs.map(
				product =>
					({
						firestoreId: product.id,
						...product.data(),
					} as ProductType)
			);
			setDefaultProducts(productsList);
		});

		// try {
		// 	(async () => {
		// 		const products = await getDocs(collection(db, 'defaultProducts'));
		// 		const productsList = products.docs.map(product => ({
		// 			firebaseId: product.id,
		// 			...product.data(),
		// 		}));
		// 		setDefaultProducts(productsList);
		// 	})();
		// } catch (error) {
		// 	console.log(error);
		// }
		return () => unsub();
	}, []);

	useEffect(() => {
		const productsQuery = query(collection(db, 'customProducts'));
		const unsub = onSnapshot(productsQuery, productsSnapshot => {
			const productsList = productsSnapshot.docs.map(
				product =>
					({
						firestoreId: product.id,
						...product.data(),
					} as ProductType)
			);
			productsList.length ? setCustomProducts(productsList) : setCustomProducts([]);
		});

		return () => unsub();
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

	// const sendDataToFirestore = () => {
	// 	products2.forEach(async product => {
	// 		await addDoc(collection(db, 'defaultProducts'), {
	// 			...product,
	// 		});
	// 	});
	// };

	return (
		<Wrapper>
			<div>
				<Header />
				{/* <button onClick={sendDataToFirestore}>update</button> */}
				<ProgressBar />
			</div>
			{!productsList.length ? (
				<LoadingGif />
			) : productsList.some(product => product.quantity >= 0) ? (
				<ProductsList productsList={productsList} />
			) : (
				<EmptyShoppingList />
			)}
			{/* <ProductsList productsList={productsList} /> */}
			<AddButton onClick={showAddProductView} />
			<AddProducts isActive={isAddProductActive} hideAddProductView={hideAddProductView} />
			<EditPanel />
			<ChangeCategoryPanel />
		</Wrapper>
	);
};
