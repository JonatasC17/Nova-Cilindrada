import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  color: black;
  font-size: 18px;
  margin: 2rem 0;
`;

export const LabelLogin = styled.label`
  color: #676767;
  font-size: 16px;
`;

export const LabelError = styled.div`
  font-size: 14px;
  color: red;
`;
export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const Button = styled.button`
  padding: 16px 20px;
  width: 100%;
  cursor: pointer;
  background-color: #d20300;
  margin: 1rem 0;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  max-width: 350px;
`;
