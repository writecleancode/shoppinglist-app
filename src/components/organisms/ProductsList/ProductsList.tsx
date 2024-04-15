import { ProductsToBuy } from 'src/components/molecules/ProductsToBuy/ProductsToBuy';
import { BoughtProducts } from 'src/components/molecules/BoughtProducts/BoughtProducts';
import { Wrapper } from './ProductsList.styles';
import { ProductType } from 'src/views/MainView';

type ProductsListProps = {
	productsToBuy: ProductType[];
	setProductsToBuy: React.Dispatch<React.SetStateAction<ProductType[] | never[]>>;
};

export const ProductsList = ({ productsToBuy, setProductsToBuy }: ProductsListProps) => {
	return (
		<Wrapper>
			<ProductsToBuy productsToBuy={productsToBuy} setProductsToBuy={setProductsToBuy} />
			<BoughtProducts productsToBuy={productsToBuy} setProductsToBuy={setProductsToBuy} />
		</Wrapper>
	);
};
