import { Header } from '@/components/Header';
import { Text } from '@/components/common/Text';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { Todos } from '@/components/Todos';
import { Container, Wrapper } from './TodoPage.style';

export const TodoPage = () => {
  return (
    <Container>
      <Header>
        <Text $color="white" $fontSize="title" $fontWeight="semiBold">
          DAILY LOG
        </Text>
      </Header>
      <Wrapper>
        <Sidebar />
        <Todos />
      </Wrapper>
      <Footer />
    </Container>
  );
};
