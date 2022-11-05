import { ThemeProvider } from 'styled-components';

import { Router } from './Router';
import { GlobalStyle } from './styles';
import { DEFAULT_THEME } from './styles/themes';

function App(): JSX.Element {
	return (
		<ThemeProvider theme={DEFAULT_THEME}>
			<Router />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export { App };
