import 'styled-components';

import { Colors, FontSize } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSize: FontSize;
  }
}
