import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductListItemType } from 'src/views/MainView';

type ProductsListProps = {
	productsToBuy: ProductListItemType[];
	boughtProducts: ProductListItemType[];
	setProductsToBuy: React.Dispatch<React.SetStateAction<ProductListItemType[] | never[]>>;
	setBoughtProducts: React.Dispatch<React.SetStateAction<ProductListItemType[] | never[]>>;
};

export const ProductsList = ({ productsToBuy, boughtProducts, setProductsToBuy, setBoughtProducts }: ProductsListProps) => {
	return (
		<Wrapper>
			<ProductsToBuy productsToBuy={productsToBuy} setProductsToBuy={setProductsToBuy} />
			<BoughtProducts boughtProducts={boughtProducts} setBoughtProducts={setBoughtProducts} />
		</Wrapper>
	);
};
