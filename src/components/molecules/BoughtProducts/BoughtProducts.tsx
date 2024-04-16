import { ProductType } from 'src/views/MainView';
import { ProductListItem } from '../ProductListItem/ProductListItem';

type BoughtProductsProps = {
	productsToBuy: ProductType[];
	setProductsToBuy: React.Dispatch<React.SetStateAction<ProductType[] | never[]>>;
	productsList: ProductType[];
};

export const BoughtProducts = ({ productsToBuy, setProductsToBuy, productsList }: BoughtProductsProps) => {
	return (
		<ul>
			{productsList.map(product =>
				product.quantity >= 0 && product.isBought ? (
					<ProductListItem key={product.id} product={product} setProductsList={setProductsToBuy} />
				) : null
			)}
		</ul>
	);
};
