import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';

export const ProductsList = () => {
	return (
		<Wrapper>
			<ProductsToBuy />
			<BoughtProducts />
		</Wrapper>
	);
};
