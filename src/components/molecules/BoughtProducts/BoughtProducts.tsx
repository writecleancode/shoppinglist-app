import { ProductType } from 'src/views/MainView';
import { ProductListItem } from '../ProductListItem/ProductListItem';

type BoughtProductsProps = {
	boughtProducts: ProductType[];
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
