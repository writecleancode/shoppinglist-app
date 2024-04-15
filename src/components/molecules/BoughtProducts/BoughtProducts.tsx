import { ProductType } from 'src/views/MainView';
import { ProductListItem } from '../ProductListItem/ProductListItem';

type BoughtProductsProps = {
	productsToBuy: ProductType[];
	setProductsToBuy: React.Dispatch<React.SetStateAction<ProductType[] | never[]>>;
};

export const BoughtProducts = ({ productsToBuy, setProductsToBuy }: BoughtProductsProps) => {
	return (
		<ul>
			{productsToBuy.map(product =>
				product.quantity >= 0 && product.isBought ? (
					<ProductListItem key={product.id} product={product} setProductsList={setProductsToBuy} />
				) : null
			)}
		</ul>
	);
};
