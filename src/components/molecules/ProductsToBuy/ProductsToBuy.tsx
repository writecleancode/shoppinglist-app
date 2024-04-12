import { StyledList } from './ProductsToBuy.styles';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { ProductListItemType } from 'src/views/MainView';

type ProductsToBuyProps = {
	productsToBuy: ProductListItemType[];
	setProductsToBuy: React.Dispatch<React.SetStateAction<ProductListItemType[] | never[]>>;
};

export const ProductsToBuy = ({ productsToBuy, setProductsToBuy }: ProductsToBuyProps) => {
	return (
		<StyledList>
			{productsToBuy.map(product =>
				!product.isBought ? (
					<ProductListItem key={product.id} product={product} setProductsList={setProductsToBuy} />
				) : null
			)}
		</StyledList>
	);
};
