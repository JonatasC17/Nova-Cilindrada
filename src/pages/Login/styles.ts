import styled from "styled-components";

import backgroundLogin from "../../assets/backgroundLogin.jpg";

export const Container = styled.div`
  background-image: url(${backgroundLogin});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Contents = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 400px;
  padding: 20px;
`;
