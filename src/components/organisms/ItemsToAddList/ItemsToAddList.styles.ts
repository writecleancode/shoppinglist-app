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

export const ItemToAdd = styled.li``;

export const AddItemButton = styled.button`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	border: none;
	width: 100%;
	background-color: transparent;
	font-size: 1.6rem;
`;

export const PlusIcon = styled.button<{ $isAdded: boolean }>`
	border: none;
	border-radius: 100rem;
	background-color: ${({ $isAdded, theme }) => ($isAdded ? theme.colors.secondary : theme.colors.grey)};
`;
