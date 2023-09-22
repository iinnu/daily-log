import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [value: T, setValue: Dispatch<SetStateAction<T>>] {
  const readValue = useCallback((): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}" : `, error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState(readValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
