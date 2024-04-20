import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductType } from 'src/views/MainView';

type ProductsListProps = {
	productsToBuy: ProductType[];
	setProductsToBuy: React.Dispatch<React.SetStateAction<ProductType[] | never[]>>;
	productsList: ProductType[];
};

export const ProductsList = ({
	productsToBuy,
	setProductsToBuy,
	productsList,
	setDefaultProducts,
	setCustomProducts,
	customProducts,
	openEditPanel,
	setEditedProduct,
}: ProductsListProps) => {
	const sortProductsByCategory = (productCategory: string) => {
		switch (productCategory) {
			case 'appliances and electronics':
				return 1;

			case 'baby articles':
				return 2;

			case 'bulk goods':
				return 3;

			case 'cakes, desserts, additives':
				return 4;

			case 'sweets and snacks':
				return 5;

			case 'alcohols and tobacco':
				return 6;

			case 'preserves':
				return 7;

			case 'coffee, tea, cocoa':
				return 8;

			case 'hygiene':
				return 9;

			case 'meat and cold cuts':
				return 10;

			case 'frozen foods and ice cream':
				return 11;

			case 'dairy products':
				return 12;

			case 'water and drinks':
				return 13;

			case 'first aid kit':
				return 14;

			case 'spices, sauces, additives':
				return 15;

			case 'fish':
				return 16;

			case 'other':
				return 17;

			case 'fats':
				return 18;

			case 'vegetables and fruits':
				return 19;

			case 'baked goods':
				return 20;

			case 'articles for animals':
				return 21;

			case 'household chemicals':
				return 22;

			case 'convenience foods':
				return 23;

			case 'clothes':
				return 24;

			case 'cereals and muesli':
				return 25;

			case 'garden and DIY':
				return 26;

			default:
				return 999;
		}
	};

	const sortedProductsList = productsList
		.toSorted((a, b) => {
			if (a.name < b.name) {
				return -1;
			} else if (a.name > b.name) {
				return 1;
			} else {
				return 0;
			}
		})
		.toSorted((a, b) => {
			if (sortProductsByCategory(a.category.name) < sortProductsByCategory(b.category.name)) {
				return -1;
			} else if (sortProductsByCategory(a.category.name) > sortProductsByCategory(b.category.name)) {
				return 1;
			} else {
				return 0;
			}
		});

	return (
		<Wrapper>
			<ProductsToBuy
				productsToBuy={productsToBuy}
				setProductsToBuy={setProductsToBuy}
				productsList={sortedProductsList}
				setDefaultProducts={setDefaultProducts}
				setCustomProducts={setCustomProducts}
				customProducts={customProducts}
				sortProductsByCategory={sortProductsByCategory}
				openEditPanel={openEditPanel}
				setEditedProduct={setEditedProduct}
			/>
			<BoughtProducts
				productsToBuy={productsToBuy}
				setProductsToBuy={setProductsToBuy}
				productsList={sortedProductsList}
				setDefaultProducts={setDefaultProducts}
				setCustomProducts={setCustomProducts}
				customProducts={customProducts}
				openEditPanel={openEditPanel}
				setEditedProduct={setEditedProduct}
			/>
		</Wrapper>
	);
};
