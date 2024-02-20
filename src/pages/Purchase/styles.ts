import styled from "styled-components";
import { devices } from "../../styles/medias";

export const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  border-bottom: 5px solid #d20300;
`;

export const HeadContainerPurchase = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderBotton = styled.div`
  height: 2.5rem;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #d20300;
  }

  p {
    @media ${devices.tablet} {
      font-size: 0.8rem;
      padding: 0.2rem;
      text-align: center;
    }

    @media ${devices.mobileG} {
      padding: 0 1rem;
    }

    @media ${devices.mobileM} {
      font-size: 0.7rem;
      padding: 0 0.5rem;
    }

    @media ${devices.mobile} {
      font-size: 0.6rem;
    }
  }
`;

export const MainContainerPurchase = styled.div`
  flex: 1;
  background: #e5e5e5;
`;

export const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Confirmation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;

  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageConfirmation = styled.div`
  background: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
    margin: 0 1.5rem;
  }
`;
export const OrderSummary = styled.div`
  width: 30%;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    margin: 0 1.5rem;
    width: auto;
  }

  h1 {
    margin: 1rem;
    border-bottom: 1px solid #d20300;
  }
`;
