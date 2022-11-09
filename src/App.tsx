import { ThemeProvider } from 'styled-components';

import { BooksProvider } from './contexts';
import { Router } from './Router';
import { GlobalStyle } from './styles';
import { DEFAULT_THEME } from './styles/themes';

function App(): JSX.Element {
	return (
		<ThemeProvider theme={DEFAULT_THEME}>
			<BooksProvider>
				<Router />
			</BooksProvider>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export { App };
