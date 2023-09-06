import { Header } from '@/components/Header';
import { Text } from '@/components/common/Text';

export const TodoPage = () => {
  return (
    <>
      <Header>
        <Text $color="white" $fontSize="title" $fontWeight="semiBold">
          DAILY LOG
        </Text>
      </Header>
    </>
  );
};
