import { StyledList } from './ProductsToBuy.styles';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { ProductListItemType } from 'src/views/MainView';

type ProductsToBuyProps = {
	productsToBuy: ProductListItemType[];
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
