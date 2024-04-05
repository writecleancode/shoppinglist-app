import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.button`
	margin-right: 0.8rem;
	padding: 0.8rem;
	border: none;
	background-color: transparent;
`;

export const Circle = styled.div`
	position: relative;
	width: var(--diameter);
	height: var(--diameter);
	overflow: hidden;
`;

export const OuterCircle = styled.div`
	content: '';
	position: absolute;
	inset: 0;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.secondary};
`;

export const InnerCircle = styled.div`
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	border-radius: 50%;
	width: calc(100% - 2 * var(--circularLineWidth));
	height: calc(100% - 2 * var(--circularLineWidth));
	background-color: #fff;
`;

const hideAnimOne = keyframes`
    0% {
        transform: skewX(-90deg);        
    }

    0.1% {
	    width: 50%;
        height: 50%;
    }
    
    100% {
        width: 50%;
        height: 50%;
        transform: skewX(0deg);
    }
`;

const hideAnimTwo = keyframes`
    0% {
        transform: skewY(90deg);
    }

    0.1% {
	    width: 50%;
        height: 50%;
    }

    100% {
        width: 50%;
        height: 50%;
        transform: skewY(0deg);
    }
`;

export const Box = styled.div`
	content: '';
	position: absolute;
	background-color: #fff;

	&.bottom-left {
		bottom: 0;
		left: 0;
		transform-origin: 100% 0%;
		/* animation: ${hideAnimOne} 0.05s linear forwards; */
	}

	&.bottom-right {
		bottom: 0;
		right: 0;
		transform-origin: 0% 0%;
		/* animation: ${hideAnimTwo} 0.05s 0.05s linear forwards; */
	}

	&.top-right {
		top: 0;
		right: 0;
		transform-origin: 0% 100%;
		/* animation: ${hideAnimOne} 0.05s 0.1s linear forwards; */
	}

	&.top-left {
		top: 0;
		left: 0;
		transform-origin: 100% 100%;
		/* animation: ${hideAnimTwo} 0.05s 0.15s linear forwards; */
	}
`;
