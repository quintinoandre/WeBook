/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components';
import { DEFAULT_THEME } from '../styles/themes/default';

type TThemeType = typeof DEFAULT_THEME;

declare module 'styled-components' {
	export interface DefaultTheme extends TThemeType {}
}
