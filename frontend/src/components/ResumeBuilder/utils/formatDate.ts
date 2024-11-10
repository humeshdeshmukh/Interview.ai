// formatDate.ts

// Format date to 'YYYY-MM-DD'
export const formatDate = (date: string | Date): string => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // month is 0-indexed
    const day = String(d.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };
  
  // Format date to 'MMM YYYY' (e.g., 'Jan 2020')
  export const formatDateShort = (date: string | Date): string => {
    const d = new Date(date);
    const options = { year: 'numeric', month: 'short' };
    return d.toLocaleDateString(undefined, options);
  };
  