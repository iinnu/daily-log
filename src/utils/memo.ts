import { getLocalStorageItem, setLocalStorageItem } from './localStorage';

const MEMO = 'memo';
const INITIAL_MEMO = 'The darkest hour is just before the dawn.';

export const getMemoFromStorage = () => {
  const memo: string | null = getLocalStorageItem(MEMO);
  return memo;
};

export const initMemo = () => {
  const memo = getMemoFromStorage();

  if (memo) return;

  setLocalStorageItem(MEMO, INITIAL_MEMO);
};

export const updateMemoInStorage = (updatedMemo: string) => {
  setLocalStorageItem(MEMO, updatedMemo);
};
