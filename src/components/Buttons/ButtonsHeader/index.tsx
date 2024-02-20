import React, { ReactNode } from "react";
import * as C from "./styles";

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  exit?: string;
}

export const ButtonsHeader: React.FC<ButtonProps> = ({ onClick, children }) => (
  <C.ButtonsHeader onClick={onClick}>{children}</C.ButtonsHeader>
);
