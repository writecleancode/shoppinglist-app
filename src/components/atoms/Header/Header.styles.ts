import styled from 'styled-components';

export const Wrapper = styled.header`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	padding: 0.8rem;
	background-color: ${({ theme }) => theme.colors.primary};
	overflow: hidden;

	@media (min-width: 992px) {
		padding: 1.2rem;
	}
`;

export const CartIcon = styled.img`
	width: 2.4rem;
`;

export const H1 = styled.h1`
	font-size: 2.4rem;
`;

export const EllipsisButton = styled.button`
	position: absolute;
	right: 0;
	padding: 0.8rem;
	border: none;
	background-color: transparent;
`;

export const RemoveBoughtProductsButton = styled.button<{ $isVisible: boolean }>`
	position: absolute;
	right: 3.4rem;
	display: flex;
	align-items: center;
	gap: 0.8rem;
	padding: 0.8rem 1.6rem;
	background-color: #eee;
	border: none;
	border-radius: 100px;
	color: #f10a0a;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	font-size: 1.5rem;
	translate: ${({ $isVisible }) => ($isVisible ? '0 0' : '0 145%')};
	opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
	transition: translate 0.2s ease-in-out, opacity 0.2s;
`;
