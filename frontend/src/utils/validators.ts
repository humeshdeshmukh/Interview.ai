// validators.ts

/**
 * Function to validate an email address.
 * @param email - The email address to validate.
 * @returns `true` if the email is valid, otherwise `false`.
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Function to check if a password is strong.
 * A strong password is defined as at least 8 characters long, containing at least one uppercase letter, one lowercase letter, and one digit.
 * @param password - The password to validate.
 * @returns `true` if the password is strong, otherwise `false`.
 */
export const isStrongPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Function to validate if a string is not empty.
 * @param value - The string to validate.
 * @returns `true` if the string is not empty, otherwise `false`.
 */
export const isNotEmpty = (value: string): boolean => {
  return typeof value === 'string' && value.trim().length > 0;
};
