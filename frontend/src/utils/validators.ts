// validators.ts

// Function to validate an email address
export const isValidEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  // Function to check if a password is strong
  export const isStrongPassword = (password: string): boolean => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
  };
  
  // Function to validate if a string is not empty
  export const isNotEmpty = (value: string): boolean => {
    return value.trim().length > 0;
  };
  