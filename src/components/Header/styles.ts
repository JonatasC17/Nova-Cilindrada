import styled from "styled-components";
import { devices } from "../../styles/medias";

export const Container = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  height: 5rem;
  margin: 0.4rem;

  @media ${devices.mobile} {
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 0.5rem;
  }

  @media ${devices.mobileM} {
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 0.5rem;
  }

  @media ${devices.mobileG} {
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 0.5rem;
  }

  @media ${devices.tablet} {
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 0.5rem;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;

  @media ${devices.mobile} {
    margin: 0;
  }
  @media ${devices.mobileM} {
    margin: 0;
  }

  @media ${devices.mobileG} {
    margin: 0;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  flex: 1;

  @media ${devices.mobileG} {
    display: none;
  }
`;

export const ContentIcons = styled.div`
  display: none;

  @media ${devices.mobile} {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;

    img {
      width: 2rem;
    }
  }

  @media ${devices.mobileM} {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;

    img {
      width: 2rem;
    }
  }

  @media ${devices.mobileG} {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;

    img {
      width: 2rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  img {
    width: 8rem;
  }

  @media ${devices.mobile} {
    margin-top: 0.1rem;
  }
`;
