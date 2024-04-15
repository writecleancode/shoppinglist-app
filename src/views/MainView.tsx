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
		category: { name: 'alcohols and tobacco', imgSrc: '/src/assets/img/category-icons/alcohols_and_tobacco.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 2,
		name: 'alcohol',
		category: { name: 'first aid kit', imgSrc: '/src/assets/img/category-icons/first_aid_kit.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 3,
		name: 'Alka-Seltzer',
		category: { name: 'articles for animals', imgSrc: '/src/assets/img/category-icons/articles_for_animals.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 4,
		name: 'amol',
		category: { name: 'baby articles', imgSrc: '/src/assets/img/category-icons/baby_articles.png' },
		quantity: 0,
		isBought: true,
	},
	{
		id: 5,
		name: 'antiperspirant',
		category: { name: 'bulk goods', imgSrc: '/src/assets/img/category-icons/bulk_goods.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 6,
		name: 'apap',
		category: { name: 'household chemicals', imgSrc: '/src/assets/img/category-icons/household_chemicals.png' },
		quantity: 0,
		isBought: true,
	},
	{
		id: 7,
		name: 'apples',
		category: { name: 'cakes, desserts, additives', imgSrc: '/src/assets/img/category-icons/cakes_desserts_additives.png' },
		quantity: 0,
		isBought: true,
	},
	{
		id: 8,
		name: 'aspirin',
		category: { name: 'convenience foods', imgSrc: '/src/assets/img/category-icons/convenience_foods.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 9,
		name: 'avocado',
		category: { name: 'hygiene', imgSrc: '/src/assets/img/category-icons/hygiene.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 10,
		name: 'baby wet wipes',
		category: { name: 'other', imgSrc: '/src/assets/img/category-icons/other.png' },
		quantity: 0,
		isBought: true,
	},
	{
		id: 11,
		name: 'bacon',
		category: { name: 'coffee, tea, cocoa', imgSrc: '/src/assets/img/category-icons/coffee_tea_cocoa.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 12,
		name: 'baguette',
		category: { name: 'meat and cold cuts', imgSrc: '/src/assets/img/category-icons/meat_and_cold_cuts.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 13,
		name: 'baguette',
		category: { name: 'frozen foods and ice cream', imgSrc: '/src/assets/img/category-icons/frozen_foods_and_ice_cream.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 14,
		name: 'baguette',
		category: { name: 'dairy products', imgSrc: '/src/assets/img/category-icons/dairy_products.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 15,
		name: 'baguette',
		category: { name: 'garden and DIY', imgSrc: '/src/assets/img/category-icons/garden_and_diy.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 16,
		name: 'baguette',
		category: { name: 'baked goods', imgSrc: '/src/assets/img/category-icons/baked_goods.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 17,
		name: 'baguette',
		category: { name: 'preserves', imgSrc: '/src/assets/img/category-icons/preserves.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 18,
		name: 'baguette',
		category: { name: 'spices, sauces, additives', imgSrc: '/src/assets/img/category-icons/spices_sauces_additives.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 19,
		name: 'baguette',
		category: { name: 'cereals and muesli', imgSrc: '/src/assets/img/category-icons/cereals_and_muesli.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 20,
		name: 'baguette',
		category: { name: 'fish', imgSrc: '/src/assets/img/category-icons/fish.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 21,
		name: 'baguette',
		category: { name: 'household appliances and electronics', imgSrc: '/src/assets/img/category-icons/household_appliances_and_electronics.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 22,
		name: 'baguette',
		category: { name: 'sweets and snacks', imgSrc: '/src/assets/img/category-icons/sweets_and_snacks.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 23,
		name: 'baguette',
		category: { name: 'fats', imgSrc: '/src/assets/img/category-icons/fats.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 24,
		name: 'baguette',
		category: { name: 'clothes', imgSrc: '/src/assets/img/category-icons/clothes.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 25,
		name: 'baguette',
		category: { name: 'vegetables and fruits', imgSrc: '/src/assets/img/category-icons/vegetables_and_fruits.png' },
		quantity: -1,
		isBought: false,
	},
	{
		id: 26,
		name: 'baguette',
		category: { name: 'water and drinks', imgSrc: '/src/assets/img/category-icons/water_and_drinks.png' },
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
	category: {
		name: string;
		imgSrc: string;
	};
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
