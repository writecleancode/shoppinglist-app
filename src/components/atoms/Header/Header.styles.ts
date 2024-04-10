import styled from 'styled-components';

export const Wrapper = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	padding: 0.8rem;
	background-color: ${({ theme }) => theme.colors.primary};

	@media (min-width: 992px) {
		padding: 1.2rem;
	}
`;

export const Icon = styled.img`
	width: 2.4rem;
`;

export const H1 = styled.h1`
	font-size: 2.4rem;
`;
