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

export const HeadContainerHome = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  margin: 0 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: end;
  font-style: italic;
  font-weight: bolder;
  color: #343a40;
`;

export const HeaderBotton = styled.div`
  height: 2.5rem;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #d20300;
  }

  p {
    @media ${devices.tablet} {
      font-size: 0.7rem;
      padding: 0.2rem;
      text-align: center;
    }

    @media ${devices.mobileG} {
      font-size: 0.7rem;
      padding: 0 1rem;
      text-align: center;
    }

    @media ${devices.mobileM} {
      font-size: 0.7rem;
      padding: 0 0.5rem;
      text-align: center;
    }

    @media ${devices.mobile} {
      font-size: 0.6rem;
      padding: 0 0.5rem;
      text-align: center;
    }
  }
`;

export const MainContainerHome = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .bannerBox {
    height: auto;
  }
  .banner {
    width: 100vw;
  }

  .bannerBotton {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    background: #343a40;

    @media ${devices.mobile} {
      height: 4rem;
      font-size: 0.7rem;
      padding: 0.2rem;
      text-align: center;
    }

    span {
      color: white;
    }
  }

  .cardsContainer {
    margin: 2.5%;
    width: 95%;
  }
`;
