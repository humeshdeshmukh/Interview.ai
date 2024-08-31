// helpers.ts

// Function to format a date to YYYY-MM-DD
export const formatDate = (date: Date | null | undefined): string => {
  if (!date || isNaN(date.getTime())) {
    return 'Invalid Date'; // Return a default value for invalid dates
  }
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
};

// Function to capitalize the first letter of a string
export const capitalize = (str: string): string => {
  if (typeof str !== 'string' || str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Function to generate a unique ID
export const generateUniqueId = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const rand = Math.random() * 16 | 0;
    const value = char === 'x' ? rand : (rand & 0x3 | 0x8);
    return value.toString(16);
  });
};
