// storageUtils.ts

export const saveToLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getFromLocalStorage = <T>(key: string): T | null => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  
  export const removeFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
  };
  