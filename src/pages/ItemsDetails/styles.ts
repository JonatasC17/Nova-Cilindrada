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

export const HeadContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
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

export const MainContainerDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  .motorName {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 5px solid #d20300;
    width: 100vw;
    background: #343a40;

    h1 {
      font-weight: bold;
      color: #d20300;
      text-align: center;
      padding: 1rem;

      @media ${devices.mobileG} {
        font-size: 1.5rem;
      }

      @media ${devices.mobileM} {
        font-size: 1.3rem;
      }

      @media ${devices.mobile} {
        font-size: 1rem;
      }
    }
  }
`;

export const PromotionalBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-image: url("../src/assets/bannerDetalhes.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${devices.mobileG} {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 48vw;
    margin: 0.6rem;

    @media ${devices.mobileG} {
      width: 80vw;
    }
  }
`;

export const Conditions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    color: #d20300;
    text-shadow: 0.1em 0.05em 0.1em black;
    font-size: 4rem;
    font-style: italic;
    margin: 2.5rem;

    @media ${devices.mobileG} {
      font-size: 2rem;
    }

    @media ${devices.mobile} {
      font-size: 1.5rem;
    }
  }

  .infoConditions {
    display: flex;
    flex-direction: column;
  }

  span {
    color: #343a40;
    font-size: 2rem;
    margin-bottom: 1rem;

    @media ${devices.mobileG} {
      font-size: 1rem;
    }

    @media ${devices.mobile} {
      font-size: 0.8rem;
    }
  }
`;

export const Details = styled.div`
  background: #f0f2f5;
  padding: 2rem;
  width: 100%;

  .detailsTitle {
    h1 {
      text-align: center;
    }
  }
  .detailsBox {
    li {
      list-style: none;
      border: 1px solid #d20300;
      padding: 0.5rem;
      margin: 0.25rem;
      font-size: large;
    }
  }

  .additionalnformation {
    p {
      font-size: x-small;
      padding: 0 1rem;
    }
  }
`;
