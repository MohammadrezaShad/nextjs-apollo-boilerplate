import 'styled-components';

import {DefaultTheme as PlazaTheme} from '@plaza-ui/styles/lib/defaultTheme';

type Theme = PlazaTheme;
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
