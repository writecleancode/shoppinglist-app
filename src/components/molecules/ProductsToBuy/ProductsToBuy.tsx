import { ProductListItem } from '../ProductListItem/ProductListItem';
import { StyledList } from './ProductsToBuy.styles';
import { ProductsToBuyProps } from 'src/types/types';

export const ProductsToBuy = ({ productsList }: ProductsToBuyProps) => {
	return (
		<StyledList>
			{productsList.map(product =>
				product.quantity >= 0 && !product.isBought ? <ProductListItem key={product.id} product={product} /> : null
			)}
		</StyledList>
	);
};
