import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductListItemType } from 'src/views/MainView';

type ProductsListProps = {
	productsToBuy: ProductListItemType[];
	setProductsToBuy: React.Dispatch<React.SetStateAction<ProductListItemType[] | never[]>>;
};

export const ProductsList = ({ productsToBuy, setProductsToBuy }: ProductsListProps) => {
	return (
		<Wrapper>
			<ProductsToBuy productsToBuy={productsToBuy} setProductsToBuy={setProductsToBuy} />
			<BoughtProducts productsToBuy={productsToBuy} setProductsToBuy={setProductsToBuy} />
		</Wrapper>
	);
};
