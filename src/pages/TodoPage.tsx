import { Header } from '@/components/Header';
import { Text } from '@/components/common/Text';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { Todo } from '@/components/Todo';
import { Wrapper } from './TodoPage.style';

export const TodoPage = () => {
  return (
    <>
      <Header>
        <Text $color="white" $fontSize="title" $fontWeight="semiBold">
          DAILY LOG
        </Text>
      </Header>
      <Wrapper>
        <Sidebar />
        <Todo />
      </Wrapper>
      <Footer />
    </>
  );
};
