import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: string) => {
  /**
   * Get item from local storage or initial value.
   */
  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value || initialValue;
    } catch (error) {
      console.error(error);
    }
  });

  /**
   * Set value to local storage.
   * @param value value to set in key.
   */
  const setValue = (value: string) => {
    try {
      window.localStorage.setItem(key, value);
      setState(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
