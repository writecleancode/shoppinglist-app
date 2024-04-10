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
		quantity: -1,
		isBought: false,
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
		quantity: -1,
		isBought: false,
	},
	{
		id: 7,
		name: 'apples',
		quantity: -1,
		isBought: false,
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
		quantity: -1,
		isBought: false,
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

const mockBoughtProducts = [
	{
		id: 13,
		name: 'bananas',
		quantity: -1,
		isBought: true,
	},
	{
		id: 14,
		name: 'bandage',
		quantity: -1,
		isBought: true,
	},
	{
		id: 15,
		name: 'batter for pancakes',
		quantity: -1,
		isBought: true,
	},
	{
		id: 16,
		name: 'bebiko',
		quantity: -1,
		isBought: true,
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
	const [boughtProducts, setBoughtProducts] = useState<never[] | ProductListItemType[]>([]);

	useEffect(() => {
		setProductsList(products);
	}, []);

	useEffect(() => {
		setProductsToBuy(mockProductsToBuy);
	}, []);

	useEffect(() => {
		setBoughtProducts(mockBoughtProducts);
	}, []);

	return (
		<Wrapper>
			<div>
				<Header />
				<ProgressBar currentProgress={20} />
			</div>
			<ProductsList productsToBuy={productsToBuy} boughtProducts={boughtProducts} />
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
