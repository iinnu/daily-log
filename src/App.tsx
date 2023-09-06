import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}
