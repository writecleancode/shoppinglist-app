import { StyledList } from './ProductsToBuy.styles';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { ProductType } from 'src/views/MainView';

type ProductsToBuyProps = {
	productsToBuy: ProductType[];
	setProductsToBuy: React.Dispatch<React.SetStateAction<ProductType[] | never[]>>;
	productsList: ProductType[];
};

export const ProductsToBuy = ({ productsToBuy, setProductsToBuy, productsList }: ProductsToBuyProps) => {
	return (
		<StyledList>
			{productsList.map(product =>
				product.quantity >= 0 && !product.isBought ? (
					<ProductListItem key={product.id} product={product} setProductsList={setProductsToBuy} />
				) : null
			)}
		</StyledList>
	);
};
