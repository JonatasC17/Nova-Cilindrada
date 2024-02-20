import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
  user: User | null;
  authenticated: boolean;
  login: (email: string, password: string) => undefined | string;
  logout: () => void;
  register: (
    username: string,
    email: string,
    password: string
  ) => undefined | string;
};

export const AuthContext = createContext<AuthContextType>(null!);
