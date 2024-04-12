import { useEffect, useState } from 'react';
import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ProductsList } from 'src/components/organisms/ProductsList/ProductsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { AddProducts } from './AddProducts';
import { Wrapper } from './MainView.styles';
import { products } from 'src/data/products';

const mockProductsToBuy = [
	{
		id: 1,
		name: 'activia',
		quantity: -1,
		isBought: false,
	},
	{
		id: 2,
		name: 'alcohol',
		quantity: -1,
		isBought: false,
	},
	{
		id: 3,
		name: 'Alka-Seltzer',
		quantity: -1,
		isBought: false,
	},
	{
		id: 4,
		name: 'amol',
		quantity: 0,
		isBought: true,
	},
	{
		id: 5,
		name: 'antiperspirant',
		quantity: -1,
		isBought: false,
	},
	{
		id: 6,
		name: 'apap',
		quantity: 0,
		isBought: true,
	},
	{
		id: 7,
		name: 'apples',
		quantity: 0,
		isBought: true,
	},
	{
		id: 8,
		name: 'aspirin',
		quantity: -1,
		isBought: false,
	},
	{
		id: 9,
		name: 'avocado',
		quantity: -1,
		isBought: false,
	},
	{
		id: 10,
		name: 'baby wet wipes',
		quantity: 0,
		isBought: true,
	},
	{
		id: 11,
		name: 'bacon',
		quantity: -1,
		isBought: false,
	},
	{
		id: 12,
		name: 'baguette',
		quantity: -1,
		isBought: false,
	},
];

type MainViewProps = {
	isAdditemActive: boolean;
	showAdditemView: () => void;
	hideAdditemView: () => void;
};

export type ProductType = {
	id: number;
	name: string;
	quantity: number;
};

export type ProductListItemType = {
	id: number;
	name: string;
	quantity: number;
	isBought: boolean;
};

export const MainView = ({ isAdditemActive, showAdditemView, hideAdditemView }: MainViewProps) => {
	const [productsList, setProductsList] = useState<never[] | ProductType[]>([]);
	const [productsToBuy, setProductsToBuy] = useState<never[] | ProductListItemType[]>([]);
	const [shoppingProgress, setShoppingProgress] = useState(0);

	const countShoppingProgress = () => {
		if (!productsToBuy.length) return;

		let boughtProducts = 0;

		for (let i = 0; i < productsToBuy.length; i++) {
			if (productsToBuy[i].isBought === true) {
				boughtProducts++;
			}
		}

		const boughtProductsPercentage = Math.round((boughtProducts / productsToBuy.length) * 100);

		setShoppingProgress(boughtProductsPercentage);
	};

	useEffect(() => {
		setProductsList(products);
	}, []);

	useEffect(() => {
		setProductsToBuy(mockProductsToBuy);
	}, []);

	useEffect(() => {
		countShoppingProgress();
	}, [productsToBuy]);

	return (
		<Wrapper>
			<div>
				<Header />
				<ProgressBar currentProgress={shoppingProgress} />
			</div>
			<ProductsList productsToBuy={productsToBuy} setProductsToBuy={setProductsToBuy} />
			<AddButton onClick={showAdditemView} />
			<AddProducts
				productsList={productsList}
				setProductsList={setProductsList}
				isActive={isAdditemActive}
				hideAdditemView={hideAdditemView}
			/>
		</Wrapper>
	);
};
