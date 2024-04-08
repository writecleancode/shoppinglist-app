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
    overflow: hidden;
	overflow: clip;
}

body {
    /* position: relative;
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    height: 100vh;
    height: 100dvh;
    background-color: ${({ theme }) => theme.colors.dirtyWhite}; */
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.5;
    /* overflow: hidden;
	overflow: clip; */

    /* @media (min-width: 720px) {
        display: flex;
        justify-content: center;
        align-items: center;
    } */
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

button {
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
