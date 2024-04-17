import { useEffect, useState } from 'react';
import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ProductsList } from 'src/components/organisms/ProductsList/ProductsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { AddProducts } from './AddProducts';
import { Wrapper } from './MainView.styles';
import { products } from 'src/data/products';

type MainViewProps = {
	isAddProductActive: boolean;
	showAddProductView: () => void;
	hideAddProductView: () => void;
};

export type ProductType = {
	id: number | string;
	name: string;
	category: {
		name: string;
		imgSrc: string;
	};
	quantity: number;
	isBought: boolean;
};

export const MainView = ({ isAddProductActive, showAddProductView, hideAddProductView }: MainViewProps) => {
	const [defaultProducts, setDefaultProducts] = useState<never[] | ProductType[]>([]);
	const [customProducts, setCustomProducts] = useState<never[] | ProductType[]>([]);
	const [productsList, setProductsList] = useState<never[] | ProductType[]>([]);
	const [shoppingProgress, setShoppingProgress] = useState(0);

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
		</Wrapper>
	);
};
