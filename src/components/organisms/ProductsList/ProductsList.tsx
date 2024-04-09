import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductType } from 'src/views/Root';

type ProductsListProps = {
	productsList: ProductType[];
};

export const ProductsList = ({ productsList }: ProductsListProps) => {
	return (
		<Wrapper>
			<ProductsToBuy />
			<BoughtProducts />
		</Wrapper>
	);
};
