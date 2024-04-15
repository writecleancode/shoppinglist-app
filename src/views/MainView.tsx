import { useEffect, useState } from 'react';
import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ProductsList } from 'src/components/organisms/ProductsList/ProductsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { AddProducts } from './AddProducts';
import { Wrapper } from './MainView.styles';
import { products } from 'src/data/products';

type MainViewProps = {
	isAdditemActive: boolean;
	showAdditemView: () => void;
	hideAdditemView: () => void;
};

export type ProductType = {
	id: number;
	name: string;
	category: {
		name: string;
		imgSrc: string;
	};
	quantity: number;
	isBought: boolean;
};

export const MainView = ({ isAdditemActive, showAdditemView, hideAdditemView }: MainViewProps) => {
	const [productsList, setProductsList] = useState<never[] | ProductType[]>([]);
	const [customProducts, setCustomProducts] = useState<never[] | ProductType[]>([])
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
		setProductsList(products);
	}, []);

	useEffect(() => {
		countShoppingProgress();
	}, [productsList]);

	return (
		<Wrapper>
			<div>
				<Header />
				<ProgressBar currentProgress={shoppingProgress} />
			</div>
			<ProductsList productsToBuy={productsList} setProductsToBuy={setProductsList} />
			<AddButton onClick={showAdditemView} />
			<AddProducts
				productsList={productsList}
				setProductsList={setProductsList}
				isActive={isAdditemActive}
				hideAdditemView={hideAdditemView}
				customProducts={customProducts}
				setCustomProducts={setCustomProducts}
			/>
		</Wrapper>
	);
};
