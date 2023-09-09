import { FaCirclePlus, FaTrashCan } from 'react-icons/fa6';

import { Text } from '@/components/common/Text';
import { CategoryStyled } from './Category.style';
import { IconButton, IconButtons } from '@/components/common/IconButton';
import { deleteCategoryFromStorage } from '@/utils/category';
import { useCategoryContext } from '@/context/hooks';

interface CategoryProps {
  title: string;
  onAddClick: () => void;
}

export const Category = ({ title, onAddClick }: CategoryProps) => {
  const { deleteCategory } = useCategoryContext();

  const handleCategoryDeleteClick = () => {
    if (deleteCategoryFromStorage(title)) {
      deleteCategory(title);
    }
  };
  return (
    <CategoryStyled>
      <Text $color="primary" $fontSize="subTitle" $fontWeight="bold">
        {title}
      </Text>
      <IconButtons>
        <IconButton onClick={onAddClick}>
          <FaCirclePlus size="16px" />
        </IconButton>
        <IconButton onClick={handleCategoryDeleteClick}>
          <FaTrashCan size="16px" />
        </IconButton>
      </IconButtons>
    </CategoryStyled>
  );
};
