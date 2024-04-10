import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductListItemType } from 'src/views/MainView';

type ProductsListProps = {
	productsToBuy: ProductListItemType[];
	boughtProducts: ProductListItemType[];
};

export const ProductsList = ({ productsToBuy, boughtProducts }: ProductsListProps) => {
	return (
		<Wrapper>
			<ProductsToBuy productsToBuy={productsToBuy} />
			<BoughtProducts boughtProducts={boughtProducts} />
		</Wrapper>
	);
};
