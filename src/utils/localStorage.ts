/* eslint-disable @typescript-eslint/no-explicit-any */

export const getLocalStorageItem = <T = any>(key: string): T | null => {
  const item = localStorage.getItem(key);

  if (item) return JSON.parse(item);

  return null;
};

export const setLocalStorageItem = (key: string, value: any) => {
  const stringfiedValue = JSON.stringify(value);

  localStorage.setItem(key, stringfiedValue);
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
