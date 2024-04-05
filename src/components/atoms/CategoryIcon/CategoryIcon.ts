import styled from 'styled-components';

export const CategoryIcon = styled.button<{ $isChecked?: boolean }>`
	margin-left: auto;
	border: none;
	border-radius: 100rem;
	width: 3.2rem;
	height: 3.2rem;
	background-color: ${({ $isChecked }) => ($isChecked ? 'transparent' : ' #ed9292')};
`;
