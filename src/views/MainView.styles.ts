import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
	height: 100dvh;

	@media (min-width: 720px) {
		flex-grow: 1;
		box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.12);
	}

	@media (min-width: 720px) and (orientation: landscape) {
		box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.12);
		overflow: hidden;
		overflow: clip;
	}

	@media (min-height: 920px) {
		border-radius: 24px;
		height: auto;
		max-height: 920px;
	}

	@media (min-width: 992px) {
		max-width: 720px;
	}
`;
