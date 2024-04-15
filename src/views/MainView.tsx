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
		category: 'alcohols and tobacco',
		quantity: -1,
		isBought: false,
	},
	{
		id: 2,
		name: 'alcohol',
		category: 'first aid kit',
		quantity: -1,
		isBought: false,
	},
	{
		id: 3,
		name: 'Alka-Seltzer',
		category: 'articles for animals',
		quantity: -1,
		isBought: false,
	},
	{
		id: 4,
		name: 'amol',
		category: 'baby articles',
		quantity: 0,
		isBought: true,
	},
	{
		id: 5,
		name: 'antiperspirant',
		category: 'bulk goods',
		quantity: -1,
		isBought: false,
	},
	{
		id: 6,
		name: 'apap',
		category: 'household chemicals',
		quantity: 0,
		isBought: true,
	},
	{
		id: 7,
		name: 'apples',
		category: 'cakes, desserts, additives',
		quantity: 0,
		isBought: true,
	},
	{
		id: 8,
		name: 'aspirin',
		category: 'convenience foods',
		quantity: -1,
		isBought: false,
	},
	{
		id: 9,
		name: 'avocado',
		category: 'hygiene',
		quantity: -1,
		isBought: false,
	},
	{
		id: 10,
		name: 'baby wet wipes',
		category: 'other',
		quantity: 0,
		isBought: true,
	},
	{
		id: 11,
		name: 'bacon',
		category: 'coffee, tea, cocoa',
		quantity: -1,
		isBought: false,
	},
	{
		id: 12,
		name: 'baguette',
		category: 'meat and cold cuts',
		quantity: -1,
		isBought: false,
	},
	{
		id: 13,
		name: 'baguette',
		category: 'frozen foods and ice cream',
		quantity: -1,
		isBought: false,
	},
	{
		id: 14,
		name: 'baguette',
		category: 'dairy products',
		quantity: -1,
		isBought: false,
	},
	{
		id: 15,
		name: 'baguette',
		category: 'garden and DIY',
		quantity: -1,
		isBought: false,
	},
	{
		id: 16,
		name: 'baguette',
		category: 'baked goods',
		quantity: -1,
		isBought: false,
	},
	{
		id: 17,
		name: 'baguette',
		category: 'preserves',
		quantity: -1,
		isBought: false,
	},
	{
		id: 18,
		name: 'baguette',
		category: 'spices, sauces, additives',
		quantity: -1,
		isBought: false,
	},
	{
		id: 19,
		name: 'baguette',
		category: 'cereals and muesli',
		quantity: -1,
		isBought: false,
	},
	{
		id: 20,
		name: 'baguette',
		category: 'fish',
		quantity: -1,
		isBought: false,
	},
	{
		id: 21,
		name: 'baguette',
		category: 'household appliances and electronics',
		quantity: -1,
		isBought: false,
	},
	{
		id: 22,
		name: 'baguette',
		category: 'sweets and snacks',
		quantity: -1,
		isBought: false,
	},
	{
		id: 23,
		name: 'baguette',
		category: 'fats',
		quantity: -1,
		isBought: false,
	},
	{
		id: 24,
		name: 'baguette',
		category: 'clothes',
		quantity: -1,
		isBought: false,
	},
	{
		id: 25,
		name: 'baguette',
		category: 'vegetables and fruits',
		quantity: -1,
		isBought: false,
	},
	{
		id: 26,
		name: 'baguette',
		category: 'water and drinks',
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
	category: string;
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
