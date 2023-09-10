import { CategoryList } from 'types/todo';
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from './localStorage';

export const CATEGORY_LIST = 'categoryList';

export const initCategoryList = () => {
  const categoryList = getLocalStorageItem(CATEGORY_LIST);

  if (categoryList) return;

  setLocalStorageItem(CATEGORY_LIST, []);
};

export const getCategoryListFromStorage = () => {
  const categoryList: CategoryList | null = getLocalStorageItem(CATEGORY_LIST);
  return categoryList;
};

export const addCategoryToStorage = (category: string): boolean => {
  const categoryList = getCategoryListFromStorage();

  if (!categoryList) {
    alert('페이지를 새로고침하고 다시 시도해주세요.');
    return false;
  }

  if (categoryList.find((e) => e === category)) {
    alert('이미 존재하는 카테고리입니다.');
    return false;
  }

  categoryList.push(category);

  setLocalStorageItem(CATEGORY_LIST, categoryList);
  setLocalStorageItem(category, []);

  return true;
};

export const deleteCategoryFromStorage = (category: string): boolean => {
  const categoryList = getCategoryListFromStorage();

  if (!categoryList) return false;

  const newCategoryList = categoryList.filter((item) => item !== category);

  setLocalStorageItem(CATEGORY_LIST, newCategoryList);
  removeLocalStorageItem(category);

  return true;
};
