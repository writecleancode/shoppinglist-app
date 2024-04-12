import styled from 'styled-components';

export const CategoryIcon = styled.button<{ $isBought: boolean }>`
	margin-left: auto;
	border: none;
	border-radius: 100rem;
	width: 3.2rem;
	height: 3.2rem;
	background-color: ${({ $isBought }) => ($isBought ? 'transparent' : ' #ed9292')};
	filter: ${({ $isBought }) => ($isBought ? 'grayscale(80%)' : 'none')};
`;
