import { Text } from '@/components/common/Text';
import { CategoryStyled, TodoAddButton } from './Category.style';

export const Category = ({ title }: { title: string }) => {
  return (
    <CategoryStyled>
      <Text $color="primary" $fontSize="subTitle" $fontWeight="bold">
        {title}
      </Text>
      <TodoAddButton>+</TodoAddButton>
    </CategoryStyled>
  );
};
