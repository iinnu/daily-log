import cat from '@/assets/cat.png';
import { Text } from '@/components/common/Text';
import { Container } from './styles';

export const TodoEmpty = () => {
  return (
    <Container>
      <img src={cat} />
      <Text $fontSize="text">카테고리를 먼저 추가해주세요 {`:)`}</Text>
    </Container>
  );
};
