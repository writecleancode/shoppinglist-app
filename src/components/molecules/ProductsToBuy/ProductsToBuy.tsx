import { StyledList } from './ProductsToBuy.styles';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { ProductType } from 'src/types/types';

type ProductsToBuyProps = {
	productsList: ProductType[];
};

export const ProductsToBuy = ({ productsList }: ProductsToBuyProps) => {
	return (
		<StyledList>
			{productsList.map(product =>
				product.quantity >= 0 && !product.isBought ? <ProductListItem key={product.id} product={product} /> : null
			)}
		</StyledList>
	);
};
