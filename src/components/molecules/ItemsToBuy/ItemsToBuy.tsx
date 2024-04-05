import { StyledList } from './ItemsToBuy.styles';
import styled from 'styled-components';

export const ItemToBuy = styled.li`
	display: flex;
	align-items: center;
	padding: 1.6rem 0.8rem;
	border-bottom: 1px solid #ececec;
`;

export const ItemsToBuy = () => {
	return (
		<StyledList>
			<ItemToBuy>
				<button className='check'></button>
				<p>ketchup</p>
				<div className='category icon'></div>
			</ItemToBuy>
			<ItemToBuy>
				<button className='check'></button>
				<p>ketchup</p>
				<div className='category icon'></div>
			</ItemToBuy>
			<ItemToBuy>
				<button className='check'></button>
				<p>ketchup</p>
				<div className='category icon'></div>
			</ItemToBuy>
		</StyledList>
	);
};
