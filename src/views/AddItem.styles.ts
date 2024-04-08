import styled from 'styled-components';

export const Wrapper = styled.div<{ $isActive: boolean }>`
	position: absolute;
	inset: 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	height: 100vh;
	height: 100dvh;
	background-color: #f5f5f5;
	translate: ${({ $isActive }) => ($isActive ? '0%' : '70%')};
	opacity: ${({ $isActive }) => ($isActive ? '1' : '0')};
	transition: translate 0.3s, opacity 0.3s;
	pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};

	@media (min-height: 920px) {
		height: auto;
		max-height: 920px;
	}
`;

export const SearchWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	gap: 1.6rem;
	padding: 1.6rem;
	background-color: ${({ theme }) => theme.colors.secondary};
`;

export const BackButton = styled.button`
	padding: 0 0.6rem;
	border: none;
	border-radius: 100rem;
	max-width: max-content;
	background-color: #fff;

	img {
		width: 3.2rem;
	}
`;

export const SearchInputWrapper = styled.div`
	position: relative;
`;

export const SearchInput = styled.input`
	padding: 0.8rem 1.6rem;
	border: none;
	border-radius: 100rem;
	color: inherit;
	font-size: 1.6rem;
`;

export const ClearInputButton = styled.button`
	position: absolute;
	top: 50%;
	right: 0;
	translate: 0 -50%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.7rem;
	border: none;
	width: 24px;
	height: 24px;
	background-color: transparent;
`;
