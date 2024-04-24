import styled, { keyframes, css } from 'styled-components';

const hideCircle = keyframes`
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

const revealCheckOne = keyframes`
	0% {
		translate: 0 0;
	}

	100% {
		translate: 8px 8px;
	}
`;

const revealCheckTwo = keyframes`
	0% {
		translate: 0 0;
	}

	100% {
		translate: 9px -11px;
	}
`;

const barsSlide = keyframes`
	0% {
		translate: 100% 0;
	}

	100% {
		translate: -100% 0;
	}
`;

export const Wrapper = styled.button`
	position: relative;
	padding: 0.8rem;
	border: none;
	background-color: transparent;
`;

export const Circle = styled.div<{ $animationType: string; $isBought: boolean }>`
	position: relative;
	z-index: 1;
	border: 2px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 50%;
	width: 24px;
	height: 24px;
	visibility: ${({ $isBought, $animationType }) =>
		$isBought && $animationType !== 'uncheckAnimation' ? 'hidden' : 'visible'};

	${({ $animationType }) => {
		if ($animationType === 'checkAnimation')
			return css`
				animation: ${hideCircle} 0.2s linear forwards;
			`;
		if ($animationType === 'uncheckAnimation')
			return css`
				animation: ${hideCircle} 0.2s linear 0.1s reverse both;
			`;
		if ($animationType === 'noAnimation') return 'animation: none;';
	}}
`;

export const IconWrapper = styled.div<{ $animationType: string; $isBought: boolean }>`
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
		background-color: ${({ $isBought, $animationType }) =>
			$isBought && $animationType !== 'uncheckAnimation' ? 'transparent' : '#fff'};
	}

	&::before {
		top: 11px;
		left: 0px;
		width: 13px;
		height: 5px;
		rotate: 43deg;

		${({ $animationType }) => {
			if ($animationType === 'checkAnimation')
				return css`
					animation: ${revealCheckOne} 0.05s 0.2s linear forwards;
				`;
			if ($animationType === 'uncheckAnimation')
				return css`
					animation: ${revealCheckOne} 0.05s linear 0.05s reverse both;
				`;
			if ($animationType === 'noAnimation') return 'animation: none;';
		}}
	}

	&::after {
		top: 1px;
		left: 11px;
		width: 5px;
		height: 14px;
		rotate: 38deg;

		${({ $animationType }) => {
			if ($animationType === 'checkAnimation')
				return css`
					animation: ${revealCheckTwo} 0.05s linear 0.25s forwards;
				`;
			if ($animationType === 'uncheckAnimation')
				return css`
					animation: ${revealCheckTwo} 0.05s linear reverse both;
				`;
			if ($animationType === 'noAnimation') return 'animation: none;';
		}}
	}
`;

export const BarsWrapper = styled.div<{ $animationType: string }>`
	position: absolute;
	inset: 0;
	z-index: 0;

	.bar {
		position: absolute;
		width: 8px;
		height: 3px;
		border-radius: 100px;
		background-color: #fff;
		overflow: clip;
		overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: 100px;
			background-color: #0f9e0d;
			translate: 100% 0;
		}

		&:nth-child(odd)::after {
			${({ $animationType }) => {
				if ($animationType === 'checkAnimation')
					return css`
						animation: ${barsSlide} 0.25s ease-out 0.25s;
					`;
				if ($animationType === 'noAnimation') return 'animation: none;';
			}}
		}

		&:nth-child(even)::after {
			${({ $animationType }) => {
				if ($animationType === 'checkAnimation')
					return css`
						animation: ${barsSlide} 0.45s ease-out 0.25s;
					`;
				if ($animationType === 'noAnimation') return 'animation: none;';
			}}
		}
	}

	.bar-top {
		top: 0;
		left: 50%;
		transform-origin: 0 50%;
		translate: 0 -50%;
		rotate: 90deg;
	}

	.bar-top-left {
		top: 20%;
		left: 20%;
		translate: -50% -50%;
		rotate: 45deg;
	}

	.bar-left {
		top: 50%;
		left: 0;
		translate: 0 -50%;
	}

	.bar-bottom-left {
		bottom: 20%;
		left: 20%;
		translate: -50% 50%;
		rotate: -45deg;
	}

	.bar-bottom {
		bottom: 0;
		left: 50%;
		transform-origin: 0 50%;
		translate: 0 50%;
		rotate: -90deg;
	}

	.bar-bottom-right {
		bottom: 20%;
		right: 20%;
		translate: 50% 50%;
		rotate: -135deg;
	}

	.bar-right {
		top: 50%;
		right: 0;
		rotate: 180deg;
	}

	.bar-top-right {
		top: 20%;
		right: 20%;
		translate: 50% -50%;
		rotate: 135deg;
	}
`;
