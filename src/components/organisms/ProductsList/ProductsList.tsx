import { useSort } from 'src/hooks/useSort';
import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductsListProps } from 'src/types/types';

export const ProductsList = ({ productsList, isInert }: ProductsListProps) => {
	const sortedProductsList = useSort(productsList);

	return (
		<Wrapper inert={isInert ? '' : undefined}>
			<ProductsToBuy productsList={sortedProductsList} />
			<BoughtProducts productsList={sortedProductsList} />
		</Wrapper>
	);
};
