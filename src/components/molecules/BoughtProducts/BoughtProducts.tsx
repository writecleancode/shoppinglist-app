import { ProductListItemType } from 'src/views/MainView';
import { ProductListItem } from '../ProductListItem/ProductListItem';

type BoughtProductsProps = {
	productsToBuy: ProductListItemType[];
	setProductsToBuy: React.Dispatch<React.SetStateAction<ProductListItemType[] | never[]>>;
};

export const BoughtProducts = ({ productsToBuy, setProductsToBuy }: BoughtProductsProps) => {
	return (
		<ul>
			{productsToBuy.map(product =>
				product.isBought ? (
					<ProductListItem key={product.id} product={product} setProductsList={setProductsToBuy} />
				) : null
			)}
		</ul>
	);
};
