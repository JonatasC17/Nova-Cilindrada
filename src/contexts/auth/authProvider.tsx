import { AuthContext } from "./authContext";
import { ReactNode, useEffect } from "react";
import React from "react";
import { User } from "../../types/User";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const validateUser = JSON.parse(usersStorage)?.filter(
        (user: User) => user.email === JSON.parse(userToken).email
      );

      if (validateUser) setUser(validateUser[0]);
    }
  }, []);

  const login = (email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")!);

    const validateUser = usersStorage?.filter(
      (user: User) => user.email === email
    );

    if (validateUser?.length) {
      if (
        validateUser[0].email === email &&
        validateUser[0].password === password
      ) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou senha incorretos.";
      }
    } else {
      return "Usuário não encontrado.";
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const register = (username: string, email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")!);
    const validateUser = usersStorage?.filter(
      (user: User) => user.email === email
    );

    if (validateUser?.length) {
      return "Existe um usuário cadastrado com esse E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { username, email, password }];
    } else {
      newUser = [{ username, email, password }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider
      value={{ user, authenticated: !!user, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
