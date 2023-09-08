import { getLocalStorageItem, setLocalStorageItem } from './localStorage';

const CATEGORY_LIST = 'category';

export const initCategoryList = () => {
  const categoryList = getLocalStorageItem(CATEGORY_LIST);

  if (categoryList) return;

  setLocalStorageItem(CATEGORY_LIST, []);
};

export const AddCategory = (category: string) => {
  const categoryList: string[] | null = getLocalStorageItem(CATEGORY_LIST);

  if (!categoryList) {
    alert('페이지를 새로고침하고 다시 시도해주세요.');
    return;
  }

  if (categoryList.find((e) => e === category)) {
    alert('이미 존재하는 카테고리입니다.');
    return;
  }

  categoryList.push(category);

  setLocalStorageItem(CATEGORY_LIST, categoryList);
  setLocalStorageItem(category, []);
};
