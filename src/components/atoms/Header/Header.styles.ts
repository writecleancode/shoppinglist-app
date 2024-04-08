import styled from 'styled-components';

export const Wrapper = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled.img`
	width: 2.4rem;
`;

export const H1 = styled.h1`
	padding: 0.8rem;
	font-size: 2.4rem;
`;
