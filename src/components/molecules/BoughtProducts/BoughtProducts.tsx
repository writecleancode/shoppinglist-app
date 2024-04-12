import { ProductListItemType } from 'src/views/MainView';
import { ProductListItem } from '../ProductListItem/ProductListItem';

type BoughtProductsProps = {
	boughtProducts: ProductListItemType[];
	setBoughtProducts: React.Dispatch<React.SetStateAction<ProductListItemType[] | never[]>>;
};

export const BoughtProducts = ({ boughtProducts, setBoughtProducts }: BoughtProductsProps) => {
	return (
		<ul>
			{boughtProducts.map(product => (
				<ProductListItem key={product.id} product={product} productsList={boughtProducts} setProductsList={setBoughtProducts} />
			))}
		</ul>
	);
};
