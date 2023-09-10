import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { TodoPage } from './pages/TodoPage';
import { initCategoryList } from './utils/category';

export default function App() {
  /**
   * 첫 로딩할 때 스토리지에 초기화
   */
  useEffect(() => {
    initCategoryList();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TodoPage />
    </ThemeProvider>
  );
}
