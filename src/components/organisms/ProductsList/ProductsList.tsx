import { useSort } from 'src/hooks/useSort';
import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductType } from 'src/types/types';

type ProductsListProps = {
	productsList: ProductType[];
};

export const ProductsList = ({ productsList }: ProductsListProps) => {
	const sortedProductsList = useSort(productsList);

	return (
		<Wrapper>
			<ProductsToBuy productsList={sortedProductsList} />
			<BoughtProducts productsList={sortedProductsList} />
		</Wrapper>
	);
};
