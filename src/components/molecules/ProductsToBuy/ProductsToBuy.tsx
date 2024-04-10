import { StyledList } from './ProductsToBuy.styles';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import styled from 'styled-components';
import { ProductType } from 'src/views/MainView';

export const ProductToBuy = styled.li`
	display: flex;
	align-items: center;
	padding: 0.8rem;
	padding-left: 0;
	border-bottom: 1px solid #ececec;

	@media (min-width: 380px) {
		padding-left: 0.8rem;
		padding-right: 1.6rem;
	}
`;

type ProductsToBuyProps = {
	productsToBuy: ProductType[];
};

export const ProductsToBuy = ({ productsToBuy }: ProductsToBuyProps) => {
	return (
		<StyledList>
			{productsToBuy.map(({ id, name }) => (
				<ProductToBuy key={id}>
					<StatusButton />
					<p>{name}</p>
					<CategoryIcon />
				</ProductToBuy>
			))}
		</StyledList>
	);
};
