export const getLocalStorageItem = (key: string) => {
  const item = localStorage.getItem(key);

  if (item) return JSON.parse(item);
  return item;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setLocalStorageItem = (key: string, value: any) => {
  const stringfiedValue = JSON.stringify(value);

  localStorage.setItem(key, stringfiedValue);
};
