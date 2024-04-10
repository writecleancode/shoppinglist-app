import { ProductListItemType } from 'src/views/MainView';
import { ProductListItem } from '../ProductListItem/ProductListItem';

type BoughtProductsProps = {
	boughtProducts: ProductListItemType[];
};

export const BoughtProducts = ({ boughtProducts }: BoughtProductsProps) => {
	return (
		<ul>
			{boughtProducts.map(product => (
				<ProductListItem key={product.id} product={product} isBought={true} />
			))}
		</ul>
	);
};
