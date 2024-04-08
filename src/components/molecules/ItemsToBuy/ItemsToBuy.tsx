import { StyledList } from './ItemsToBuy.styles';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import styled from 'styled-components';

export const ItemToBuy = styled.li`
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
