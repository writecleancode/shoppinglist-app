import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	max-width: 100vw;
	height: 100vh;
	height: 100dvh;
	background-color: ${({ theme }) => theme.colors.dirtyWhite};
	overflow: hidden;
	overflow: clip;

	@media (min-width: 720px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
