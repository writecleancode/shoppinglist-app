import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { ProductType } from 'src/views/MainView';
import styled from 'styled-components';

export const BoughtProduct = styled.li`
	display: flex;
	align-items: center;
	padding: 0.8rem;
	padding-left: 0;
	color: ${({ theme }) => theme.colors.lightBlack};
	filter: grayscale(80%);

	@media (min-width: 380px) {
		padding-left: 0.8rem;
		padding-right: 1.6rem;
	}
`;

type BoughtProductsProps = {
	boughtProducts: ProductType[];
};

export const BoughtProducts = ({ boughtProducts }: BoughtProductsProps) => {
	return (
		<ul>
			{boughtProducts.map(({ id, name }) => (
				<BoughtProduct key={id}>
					<StatusButton />
					<p>{name}</p>
					<CategoryIcon $isChecked />
				</BoughtProduct>
			))}
		</ul>
	);
};
