import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --diameter: 2.4rem;
    --circularLineWidth: 2px;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
	overflow: clip;
}

body {
    position: relative;
    padding-bottom: 6rem;
    max-width: 100vw;
    height: 100vh;
    height: 100dvh;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
	overflow: clip;    
}

img {
    vertical-align: middle;
}

a,
button, select {
    cursor: pointer;
    font-family: inherit;
}

a {
    text-decoration: none;
    color: inherit;
}

input {
    font-family: inherit;
}

table {
    border-spacing: 0;
    border-collapse: collapse;
}
`;
