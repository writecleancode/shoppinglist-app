import { StyledList } from './ItemsToBuy.styles';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import styled from 'styled-components';

export const ItemToBuy = styled.li`
	display: flex;
	align-items: center;
	padding: 0.8rem;
	border-bottom: 1px solid #ececec;
`;

export const ItemsToBuy = () => {
	return (
		<StyledList>
			<ItemToBuy>
				<StatusButton />
				<p>ketchup</p>
				<CategoryIcon />
			</ItemToBuy>
			<ItemToBuy>
				<StatusButton />
				<p>ketchup</p>
				<CategoryIcon />
			</ItemToBuy>
			<ItemToBuy>
				<StatusButton />
				<p>ketchup</p>
				<CategoryIcon />
			</ItemToBuy>
		</StyledList>
	);
};
