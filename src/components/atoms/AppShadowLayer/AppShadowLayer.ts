import styled from 'styled-components';

export const AppShadowLayer = styled.div<{ $isOpen: boolean }>`
	position: absolute;
	inset: 0;
	z-index: 1;
	width: 100%;
	min-height: 100%;
	background-color: rgba(0, 0, 0, 0.25);
	opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
	pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
	transition: opacity 0.3s;
`;
