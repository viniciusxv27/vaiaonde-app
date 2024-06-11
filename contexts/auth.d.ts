export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  birthday: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthContextProps {
  session: boolean;
  isLoading: boolean;
  user: any;
  signIn: (data: any) => Promise<any>;
  register: (data: any) => Promise<any>;
  // updateUser: (data: any) => void;
  signOut: () => Promise<void>;
}
