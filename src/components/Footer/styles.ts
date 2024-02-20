import styled from "styled-components";
import { devices } from "../../styles/medias";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #343a40;
  margin-top: 0.5rem;
  padding: 1rem;

  @media ${devices.mobileG} {
    font-size: 0.8rem;
    text-align: center;
  }
  .footer {
    color: #ffffff;
  }
`;
