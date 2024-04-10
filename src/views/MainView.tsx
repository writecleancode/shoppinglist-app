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
	},
	{
		id: 2,
		name: 'alcohol',
		quantity: -1,
	},
	{
		id: 3,
		name: 'Alka-Seltzer',
		quantity: -1,
	},
	{
		id: 4,
		name: 'amol',
		quantity: -1,
	},
	{
		id: 5,
		name: 'antiperspirant',
		quantity: -1,
	},
	{
		id: 6,
		name: 'apap',
		quantity: -1,
	},
	{
		id: 7,
		name: 'apples',
		quantity: -1,
	},
	{
		id: 8,
		name: 'aspirin',
		quantity: -1,
	},
	{
		id: 9,
		name: 'avocado',
		quantity: -1,
	},
	{
		id: 10,
		name: 'baby wet wipes',
		quantity: -1,
	},
	{
		id: 11,
		name: 'bacon',
		quantity: -1,
	},
	{
		id: 12,
		name: 'baguette',
		quantity: -1,
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

export const MainView = ({ isAdditemActive, showAdditemView, hideAdditemView }: MainViewProps) => {
	const [productsList, setProductsList] = useState<never[] | ProductType[]>([]);
	const [productsToBuy, setProductsToBuy] = useState<never[] | ProductType[]>([]);

	useEffect(() => {
		setProductsList(products);
	}, []);

	useEffect(() => {
		setProductsToBuy(mockProductsToBuy)
	}, []);

	return (
		<Wrapper>
			<div>
				<Header />
				<ProgressBar currentProgress={20} />
			</div>
			<ProductsList productsToBuy={productsToBuy} />
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
