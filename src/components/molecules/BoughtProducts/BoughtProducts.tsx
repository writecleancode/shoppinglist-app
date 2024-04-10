import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { ProductType } from 'src/views/MainView';
import styled from 'styled-components';
import { ProductListItem } from '../ProductListItem/ProductListItem';
// import { ProductListItem } from '../ProductsToBuy/ProductsToBuy';

// export const BoughtProductListItem = styled(ProductListItem)`
// 	border-bottom: none;
// 	color: ${({ theme }) => theme.colors.lightBlack};
// 	filter: grayscale(80%);
// `;

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
