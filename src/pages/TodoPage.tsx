import { Header } from '@/components/Header';
import { Text } from '@/components/common/Text';
import { Wrapper } from './TodoPage.style';
import { Box } from '@/components/common/Box';
import { Footer } from '@/components/Footer';

export const TodoPage = () => {
  return (
    <>
      <Header>
        <Text $color="white" $fontSize="title" $fontWeight="semiBold">
          DAILY LOG
        </Text>
      </Header>
      <Wrapper>
        <Box>sidebar</Box>
        <Box>todo</Box>
      </Wrapper>
      <Footer />
    </>
  );
};
