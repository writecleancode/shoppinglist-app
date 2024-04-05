import { StyledList } from './ItemsToBuy.styles';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
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
				<div className='category icon'></div>
			</ItemToBuy>
			<ItemToBuy>
				<StatusButton />
				<p>ketchup</p>
				<div className='category icon'></div>
			</ItemToBuy>
			<ItemToBuy>
				<StatusButton />
				<p>ketchup</p>
				<div className='category icon'></div>
			</ItemToBuy>
		</StyledList>
	);
};
