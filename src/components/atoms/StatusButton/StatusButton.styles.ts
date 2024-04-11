import styled, { keyframes, css } from 'styled-components';

const hideCircleAnimation = keyframes`
	0% {
		clip-path: polygon(0 50%, 0 0, 101% 0, 101% 101%, 0 101%, 0 50%, 50% 50%);
	}

	12.5% {
		clip-path: polygon(0 50%, 0 0, 101% 0, 101% 101%, 0 101%, 0 101%, 50% 50%);	
	}
	
	37.5% {
		clip-path: polygon(0 50%, 0 0, 101% 0, 101% 101%, 101% 101%, 101% 101%, 50% 50%);
	}

	62.5% {
		clip-path: polygon(0 50%, 0 0, 101% 0, 101% 0, 101% 0, 101% 0, 50% 50%);
	}

	87.5% {
		clip-path: polygon(0 50%, 0 0, 0 0, 0 0, 0 0, 0 0, 50% 50%);
	}
	
	100% {
		clip-path: polygon(0 50%, 0 0, 0 0, 0 0, 0 0, 0 50%, 50% 50%);
	}	
`;

const revealCheckOneAnimation = keyframes`
	0% {
		translate: 0 0;
	}

	100% {
		translate: 8px 8px;
	}
`;

const revealCheckTwoAnimation = keyframes`
	0% {
		translate: 0 0;
	}

	100% {
		translate: 9px -11px;
	}
`;

export const Wrapper = styled.button`
	position: relative;
	margin-right: 0.8rem;
	padding: 0.8rem;
	border: none;
	background-color: transparent;

	@media (min-width: 576px) {
		margin-right: 1.6rem;
	}
`;

export const Circle = styled.div<{ $animationType: string }>`
	position: relative;
	z-index: 1;
	border: 2px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 50%;
	width: 24px;
	height: 24px;
	/* animation: ${hideCircleAnimation} .3s linear forwards; */

	${({ $animationType }) => {
		if ($animationType === 'checkAnimation')
			return css`
				animation: ${hideCircleAnimation} 0.2s linear forwards;
			`;
		if ($animationType === 'uncheckAnimation')
			return css`
				animation: ${hideCircleAnimation} 0.2s linear reverse forwards;
			`;
		if ($animationType === 'noAnimation') return 'animation: none;';
	}}
`;

export const IconWrapper = styled.div<{ $animationType: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	border-radius: 40%;

	&::before,
	&::after {
		content: '';
		position: absolute;
		transition: translate 2s;
		background-color: #fff;
	}

	&::before {
		top: 11px;
		left: 0px;
		width: 13px;
		height: 5px;
		rotate: 43deg;
		animation: ${revealCheckOneAnimation} 0.1s 1s linear forwards;

		${({ $animationType }) => {
			if ($animationType === 'checkAnimation')
				return css`
					animation: ${revealCheckOneAnimation} 0.05s 0.2s linear forwards;
				`;
			if ($animationType === 'uncheckAnimation')
				return css`
					animation: ${revealCheckOneAnimation} 0.05s 0.2s linear reverse forwards;
				`;
			if ($animationType === 'noAnimation') return 'animation: none;';
		}}/* translate: 8px 8px; */
	}

	&::after {
		top: 1px;
		left: 11px;
		width: 5px;
		height: 14px;
		rotate: 38deg;
		animation: ${revealCheckTwoAnimation} 0.1s linear 1.1s forwards;

		${({ $animationType }) => {
			if ($animationType === 'checkAnimation')
				return css`
					animation: ${revealCheckTwoAnimation} 0.05s linear 0.25s forwards;
				`;
			if ($animationType === 'uncheckAnimation')
				return css`
					animation: ${revealCheckTwoAnimation} 0.05s linear 0.25s reverse forwards;
				`;
			if ($animationType === 'noAnimation') return 'animation: none;';
		}}/* translate: 9px -11px; */
	}
`;

// TRASH

// const hideAnimationAlt = keyframes`
// 	0% {
// 		clip-path: polygon(0 50%, 0 0, 101% 0, 101% 101%, 0 101%, 0 50%, 50% 50%);
// 	}

// 	12.5% {
// 		clip-path: polygon(0 0, 0 0, 101% 0, 101% 101%, 0 101%, 0 50%, 50% 50%);
// 	}

// 	37.5% {
// 		clip-path: polygon(101% 0, 101% 0, 101% 0, 101% 101%, 0 101%, 0 50%, 50% 50%);
// 	}

// 	62.5% {
// 		clip-path: polygon(101% 101%, 101% 101%, 101% 101%, 101% 101%, 0 101%, 0 50%, 50% 50%);
// 	}

// 	87.5% {
// 		clip-path: polygon(0 101%, 0 101%, 0 101%, 0 101%, 0 101%, 0 50%, 50% 50%);
// 	}

// 	100% {
// 		clip-path: polygon(0 50%, 0 50%, 0 50%, 0 50%, 0 50%, 0 50%, 50% 50%);
// 	}
// `

// export const Circle = styled.div`
// 	position: relative;
// 	width: var(--diameter);
// 	height: var(--diameter);
// 	overflow: hidden;
// `;

// export const OuterCircle = styled.div`
// 	content: '';
// 	position: absolute;
// 	inset: 0;
// 	border-radius: 50%;
// 	background-color: ${({ theme }) => theme.colors.secondary};
// `;

// export const InnerCircle = styled.div`
// 	content: '';
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	translate: -50% -50%;
// 	border-radius: 50%;
// 	width: calc(100% - 2 * var(--circularLineWidth));
// 	height: calc(100% - 2 * var(--circularLineWidth));
// 	background-color: #fff;
// `;

// const hideAnimOne = keyframes`
//     0% {
//         transform: skewX(-90deg);
//     }

//     0.1% {
// 	    width: 50%;
//         height: 50%;
//     }

//     100% {
//         width: 50%;
//         height: 50%;
//         transform: skewX(0deg);
//     }
// `;

// const hideAnimTwo = keyframes`
//     0% {
//         transform: skewY(90deg);
//     }

//     0.1% {
// 	    width: 50%;
//         height: 50%;
//     }

//     100% {
//         width: 50%;
//         height: 50%;
//         transform: skewY(0deg);
//     }
// `;

// export const Box = styled.div<{ $animationType: string }>`
// 	content: '';
// 	position: absolute;
// 	background-color: #fff;

// 	&.bottom-left {
// 		bottom: 0;
// 		left: 0;
// 		transform-origin: 100% 0%;
// 		${({ $animationType }) => {
// 			if ($animationType === 'checkAnimation') return css`animation: ${hideAnimOne} 0.05s linear forwards;`;
// 			if ($animationType === 'uncheckAnimation') return css`animation: ${hideAnimOne} 0.05s linear 0.15s reverse forwards;`;
// 			if ($animationType === 'noAnimation') return 'animation: none;';
// 		}}
// 	}

// 	&.bottom-right {
// 		bottom: 0;
// 		right: 0;
// 		transform-origin: 0% 0%;
// 		${({ $animationType }) => {
// 			if ($animationType === 'checkAnimation') return css`animation: ${hideAnimTwo} 0.05s linear 0.05s forwards;`;
// 			if ($animationType === 'uncheckAnimation') return css`animation: ${hideAnimTwo} 0.05s linear 0.1s reverse forwards;`;
// 			if ($animationType === 'noAnimation') return 'animation: none;';
// 		}}
// 	}

// 	&.top-right {
// 		top: 0;
// 		right: 0;
// 		transform-origin: 0% 100%;
// 		${({ $animationType }) => {
// 			if ($animationType === 'checkAnimation') return css`animation: ${hideAnimOne} 0.05s linear 0.1s forwards;`;
// 			if ($animationType === 'uncheckAnimation') return css`animation: ${hideAnimOne} 0.05s linear 0.05s reverse forwards;`;
// 			if ($animationType === 'noAnimation') return 'animation: none;';
// 		}}
// 		animation: name duration timing-function delay iteration-count direction fill-mode;
// 	}

// 	&.top-left {
// 		top: 0;
// 		left: 0;
// 		transform-origin: 100% 100%;
// 		${({ $animationType }) => {
// 			if ($animationType === 'checkAnimation') return css`animation: ${hideAnimTwo} 0.05s linear 0.15s forwards;`;
// 			if ($animationType === 'uncheckAnimation') return css`animation: ${hideAnimTwo} 0.05s linear reverse forwards;`;
// 			if ($animationType === 'noAnimation') return 'animation: none;';
// 		}}
// 	}

// 	.test {

// 		clip-path: polygon(0 50%, 0 50%, 0 50%, 0 50%, 0 50%, 0 50%, 50% 50%);
// 		clip-path: polygon(0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 50%, 50% 50%);
// 		clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 50%, 50% 50%);
// 		clip-path: polygon(100% 0, 100% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%);
// 		clip-path: polygon(0 0, 0 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%);
// 		clip-path: polygon(0 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%);
// 	}
// `;
