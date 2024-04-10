import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductType } from 'src/views/MainView';

type ProductsListProps = {
	productsToBuy: ProductType[];
	boughtProducts: ProductType[];
};

export const ProductsList = ({ productsToBuy, boughtProducts }: ProductsListProps) => {
	return (
		<Wrapper>
			<ProductsToBuy productsToBuy={productsToBuy} />
			<BoughtProducts boughtProducts={boughtProducts} />
		</Wrapper>
	);
};
