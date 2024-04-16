import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductType } from 'src/views/MainView';

type ProductsListProps = {
	productsToBuy: ProductType[];
	setProductsToBuy: React.Dispatch<React.SetStateAction<ProductType[] | never[]>>;
	productsList: ProductType[];
};

export const ProductsList = ({ productsToBuy, setProductsToBuy, productsList }: ProductsListProps) => {
	return (
		<Wrapper>
			<ProductsToBuy productsToBuy={productsToBuy} setProductsToBuy={setProductsToBuy} productsList={productsList} />
			<BoughtProducts productsToBuy={productsToBuy} setProductsToBuy={setProductsToBuy} productsList={productsList} />
		</Wrapper>
	);
};
