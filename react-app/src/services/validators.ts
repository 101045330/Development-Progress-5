// /workspaces/Development-Progress-5/react-app/src/services/validators.ts

export const isValidEmail = (email: string): boolean => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isNotEmpty = (value: string): boolean => {
    return value.trim().length > 0;
  };
  
  export const minLength = (value: string, min: number): boolean => {
    return value.length >= min;
  };
  
  // Add other validation functions as needed