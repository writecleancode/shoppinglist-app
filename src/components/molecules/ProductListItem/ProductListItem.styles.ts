import styled from 'styled-components';

export const Wrapper = styled.li<{ $isBought: boolean }>`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	padding: 0.8rem;
	padding-left: 0;
	border-bottom: ${({ $isBought }) => ($isBought ? 'none' : '1px solid #ececec')};
	color: ${({ theme, $isBought }) => ($isBought ? theme.colors.lightBlack : 'inherit')};

	@media (min-width: 380px) {
		padding-left: 0.8rem;
		padding-right: 1.6rem;
	}
`;

export const ProductName = styled.button`
	display: inline-block;
	flex-grow: 10;
	padding: 0.8rem 0;
	border: none;
	background-color: transparent;
	font-size: inherit;
	text-align: left;
`;
