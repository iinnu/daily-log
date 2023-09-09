import { Text } from '@/components/common/Text';
import { CategoryStyled, TodoAddButton } from './Category.style';
import { useTodoContext } from '../TodoContext/useTodoContext';

interface CategoryProps {
  onAddClick: () => void;
}

export const Category = ({ onAddClick }: CategoryProps) => {
  const category = useTodoContext();

  return (
    <CategoryStyled>
      <Text $color="primary" $fontSize="subTitle" $fontWeight="bold">
        {category}
      </Text>
      <TodoAddButton onClick={onAddClick}>+</TodoAddButton>
    </CategoryStyled>
  );
};
