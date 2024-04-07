import styled from 'styled-components';

export const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	padding: 2.4rem 1.6rem;
	background-color: #f5f5f5;
	list-style: none;
`;

export const ItemToAdd = styled.li`
	display: flex;
	align-items: center;
	gap: 1.6rem;
`;

export const PlusButton = styled.button<{ $isAdded: boolean }>`
	border: none;
	border-radius: 100rem;
	background-color: ${({ $isAdded, theme }) => ($isAdded ? theme.colors.secondary : theme.colors.grey)};
`;
