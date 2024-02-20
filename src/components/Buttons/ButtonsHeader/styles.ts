import styled from "styled-components";
import { ButtonProps } from ".";
import { devices } from "../../../styles/medias";

export const ButtonsHeader = styled.button<ButtonProps>`
  padding: 16px 20px;
  width: 100%;
  cursor: pointer;
  background-color: #f0f2f5;
  margin: 1.2rem;
  border: none;
  outline: none;
  color: #d20300;
  font-size: 16px;
  font-weight: 600;
  max-width: 250px;
  transition: all 0.4s ease-in;

  :hover {
    color: white;
    background: #d20300;
  }

  @media ${devices.tablet} and (orientation: landscape) {
    margin: 0;
    max-width: 200px;
  }
`;
