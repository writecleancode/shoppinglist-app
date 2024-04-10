import { StyledList } from './ProductsToBuy.styles';
import { ProductType } from 'src/views/MainView';
import { ProductListItem } from '../ProductListItem/ProductListItem';

type ProductsToBuyProps = {
	productsToBuy: ProductType[];
};

export const ProductsToBuy = ({ productsToBuy }: ProductsToBuyProps) => {
	return (
		<StyledList>
			{productsToBuy.map(product => (
				<ProductListItem key={product.id} product={product} />
			))}
		</StyledList>
	);
};
