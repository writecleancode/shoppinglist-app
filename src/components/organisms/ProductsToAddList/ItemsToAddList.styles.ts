import styled from 'styled-components';

export const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
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
	padding: 0.8rem 0;
	border: none;
	width: 100%;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.lightBlack};
	font-size: 1.6rem;
`;

export const PlusIcon = styled.div<{ $isAdded: boolean; $quantity: number; $isAnimating: boolean }>`
	border: none;
	border-radius: 100rem;
	background-color: ${({ $isAdded, theme }) => ($isAdded ? theme.colors.secondary : theme.colors.grey)};
	rotate: ${({ $quantity }) => `${$quantity * 180}deg`};
	scale: ${({ $isAnimating }) => ($isAnimating ? '0.75' : '1')};
	transition: rotate 0.5s, scale 0.35s;
`;

export const QuantityOfItems = styled.div<{ $quantity: number }>`
	color: ${({ theme }) => theme.colors.lightBlack};
	visibility: ${({ $quantity }) => ($quantity > 0 ? 'visible' : 'hidden')};
`;

export const DecreaseButton = styled.button<{ $quantity: number }>`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.2rem;
	border: none;
	background-color: transparent;
	translate: 4px;
	visibility: ${({ $quantity }) => ($quantity >= 0 ? 'visible' : 'hidden')};
	pointer-events: ${({ $quantity }) => ($quantity >= 0 ? 'auto' : 'none')};
	/* opacity: ${({ $quantity }) => ($quantity > 0 ? '1' : '0')}; */
	/* transition: opacity 0.15s; */

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
		transform: ${({ $quantity }) => ($quantity > 0 ? 'rotate(0)' : 'rotate(-45deg)')};
	}

	&::after {
		transform: ${({ $quantity }) => ($quantity > 0 ? 'rotate(0)' : 'rotate(45deg)')};
	}
`;
