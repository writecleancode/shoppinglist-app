import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductType } from 'src/views/MainView';

type ProductsListProps = {
	productsToBuy: ProductType[];
};

export const ProductsList = ({ productsToBuy }: ProductsListProps) => {
	return (
		<Wrapper>
			<ProductsToBuy productsToBuy={productsToBuy} />
			<BoughtProducts />
		</Wrapper>
	);
};
