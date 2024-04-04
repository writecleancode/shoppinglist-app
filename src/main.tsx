import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/assets/styles/fonts.css'
import { Root } from './Root';
import { GlobalStyle } from './assets/styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyle />
		<Root />
	</React.StrictMode>
);
