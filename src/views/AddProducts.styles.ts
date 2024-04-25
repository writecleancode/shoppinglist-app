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
	pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};
	transition: translate 0.3s, opacity 0.3s;

	@media (min-width: 992px) and (min-height: 880px) {
		border-radius: 24px;
		height: 100%;
		max-height: 880px;
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
	border-radius: 100px;
	max-width: max-content;
	background-color: #fff;

	img {
		width: 3.2rem;
		transition: translate 0.25s;
	}

	&:hover {
		img {
			translate: -3px;
		}
	}

	@media (min-width: 576px) {
		padding: 0 1rem;

		&:hover {
			img {
				translate: -4px;
			}
		}
	}
`;
