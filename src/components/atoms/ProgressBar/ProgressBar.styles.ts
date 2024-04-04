import styled from 'styled-components';

export const Bar = styled.span<{ $currentProgress: number }>`
	display: block;
	position: relative;
	border-radius: 100rem;
	width: 100%;
	min-height: 8px;
	background-color: #d9d9d9;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: -100%;
		border-radius: inherit;
		width: 100%;
		background-color: #4be447;
		transform: ${({ $currentProgress }) => `translate(${$currentProgress}%)`};
		transform-origin: left;
		transition: transform 0.2s ease-in-out;
	}
`;
