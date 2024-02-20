import React, { ReactNode } from "react";
import * as C from "./styles";

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  exit?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <C.Button onClick={onClick}>{children}</C.Button>
);
