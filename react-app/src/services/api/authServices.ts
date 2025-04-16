// /workspaces/Development-Progress-5/react-app/src/services/api/authServices.ts

export interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export const login = async (credentials: LoginCredentials) => {
    // ... your login logic ...
  };
  
  export const register = async (userData: any) => {
    // ... your registration logic ...
  };