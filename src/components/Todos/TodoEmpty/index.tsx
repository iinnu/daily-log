import cat from '@/assets/cat.png';
import { Text } from '@/components/common/Text';
import { Container } from './TodoEmpty.style';

export const TodoEmpty = () => {
  return (
    <Container>
      <img src={cat} />
      <Text $fontSize="text">
        아직 일정이 없어요!
        <br />
        카테고리를 먼저 추가해주세요 {`:)`}
      </Text>
    </Container>
  );
};
