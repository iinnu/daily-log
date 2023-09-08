import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { Todos } from '@/components/Todos';
import { Container, Wrapper } from './TodoPage.style';

export const TodoPage = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar />
        <Todos />
      </Wrapper>
      <Footer />
    </Container>
  );
};
