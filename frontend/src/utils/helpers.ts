// helpers.ts

// Function to format a date to YYYY-MM-DD
export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };
  
  // Function to capitalize the first letter of a string
  export const capitalize = (str: string): string => {
    if (str.length === 0) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  // Function to generate a unique ID (for example purposes)
  export const generateUniqueId = (): string => {
    return 'xxxxxx'.replace(/[x]/g, () => (Math.random() * 16 | 0).toString(16));
  };
  