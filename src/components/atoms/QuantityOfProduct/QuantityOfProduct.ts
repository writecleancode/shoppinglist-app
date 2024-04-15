import styled from 'styled-components';

export const QuantityOfProduct = styled.div<{ $quantity: number }>`
	margin-left: auto;
	padding-left: 0.8rem;
	color: ${({ theme }) => theme.colors.lightBlack};
	font-size: 1.6rem;
	visibility: ${({ $quantity }) => ($quantity > 0 ? 'visible' : 'hidden')};
`;
