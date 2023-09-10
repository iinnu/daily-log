import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { TodoPage } from './pages/TodoPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TodoPage />
    </ThemeProvider>
  );
}
