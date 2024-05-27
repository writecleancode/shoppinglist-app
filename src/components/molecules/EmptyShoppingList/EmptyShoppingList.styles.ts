import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 1%;
	height: 100%;

	@media (min-height: 460px) {
		margin-bottom: 6.4rem;
	}
`;

export const NoProductsImage = styled.img`
	margin-bottom: 2.4rem;
	width: 40%;
	max-width: 128px;

	@media (min-width: 720px) {
		max-width: 144px;
	}
`;

export const StyledTitle = styled.p`
	margin-bottom: 0.8rem;
	font-size: 1.8rem;
`;

export const StyledText = styled.p`
	opacity: 0.8;
`;
