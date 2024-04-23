import { ProductType } from 'src/views/MainView';
import { ProductListItem } from '../ProductListItem/ProductListItem';

type BoughtProductsProps = {
	productsList: ProductType[];
};

export const BoughtProducts = ({ productsList }: BoughtProductsProps) => {
	return (
		<ul>
			{productsList.map(product =>
				product.quantity >= 0 && product.isBought ? <ProductListItem key={product.id} product={product} /> : null
			)}
		</ul>
	);
};
