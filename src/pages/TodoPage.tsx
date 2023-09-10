import { useEffect } from 'react';

import { initCategoryList } from '@/utils/category';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { Todos } from '@/components/Todos';
import { CategoryProvider } from '@/context/provider';
import { Container, Wrapper } from './TodoPage.style';

export const TodoPage = () => {
  useEffect(() => {
    initCategoryList();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar />
        <CategoryProvider>
          <Todos />
        </CategoryProvider>
      </Wrapper>
      <Footer />
    </Container>
  );
};
