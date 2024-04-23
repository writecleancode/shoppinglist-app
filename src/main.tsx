import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/assets/styles/fonts.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { ProductsProvider } from './providers/ProductsProvider';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Root } from './views/Root';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ProductsProvider>
				<GlobalStyle />
				<Root />
			</ProductsProvider>
		</ThemeProvider>
	</React.StrictMode>
);
