import { getLocalStorageItem, setLocalStorageItem } from './localStorage';

const CATEGORY_LIST = 'category';

type CategoryList = { nextId: number } & { [key: string]: number };

export const initCategoryList = () => {
  const categoryList = getLocalStorageItem<CategoryList>(CATEGORY_LIST);

  if (categoryList) return;

  setLocalStorageItem(CATEGORY_LIST, { nextId: 1 });
};

export const AddCategory = (category: string) => {
  const categoryList = getLocalStorageItem<CategoryList>(CATEGORY_LIST);

  if (!categoryList) {
    alert('페이지를 새로고침하고 다시 시도해주세요.');
    return;
  }

  if (categoryList[category]) {
    alert('이미 존재하는 카테고리입니다.');
    return;
  }

  categoryList[category] = categoryList.nextId++;

  setLocalStorageItem(CATEGORY_LIST, categoryList);
  setLocalStorageItem(category, []);
};
