import styled from 'styled-components';

export const Wrapper = styled.li<{ $isBought: boolean }>`
	display: flex;
	align-items: center;
	padding: 0.8rem;
	padding-left: 0;
	border-bottom: ${({ $isBought }) => ($isBought ? 'none' : '1px solid #ececec')};
	color: ${({ theme, $isBought }) => ($isBought ? theme.colors.lightBlack : 'inherit')};
	filter: ${({ $isBought }) => ($isBought ? 'grayscale(80%)' : 'none')};

	@media (min-width: 380px) {
		padding-left: 0.8rem;
		padding-right: 1.6rem;
	}
`;
