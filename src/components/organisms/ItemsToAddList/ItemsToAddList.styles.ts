import styled from 'styled-components';

export const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	padding: 2.4rem 1.6rem;
	background-color: #f5f5f5;
	list-style: none;
	overflow-y: auto;
`;

export const ItemToAdd = styled.li`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

export const AddItemButton = styled.button`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	border: none;
	width: 100%;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.lightBlack};
	font-size: 1.6rem;
`;

export const PlusIcon = styled.button<{ $isAdded: boolean }>`
	border: none;
	border-radius: 100rem;
	background-color: ${({ $isAdded, theme }) => ($isAdded ? theme.colors.secondary : theme.colors.grey)};
`;

export const AmountOfItems = styled.div<{ $amount: number }>`
	color: ${({ theme }) => theme.colors.lightBlack};
	visibility: ${({ $amount }) => ($amount > 0 ? 'visible' : 'hidden')};
`;

export const DecreaseButton = styled.button<{ $amount: number }>`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.2rem;
	border: none;
	background-color: transparent;
	translate: 4px;
	opacity: ${({ $amount }) => ($amount > 0 ? '1' : '0')};
	pointer-events: ${({ $amount }) => ($amount > 0 ? 'auto' : 'none')};
	transition: opacity 0.1s;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		width: 18px;
		height: 3px;
		background-color: #e40808;
		border-radius: 100rem;
		transition: transform 0.3s;
	}

	&::before {
		transform: ${({ $amount }) => ($amount > 1 ? 'rotate(0)' : 'rotate(-45deg)')};
	}

	&::after {
		transform: ${({ $amount }) => ($amount > 1 ? 'rotate(0)' : 'rotate(45deg)')};
	}
`;
