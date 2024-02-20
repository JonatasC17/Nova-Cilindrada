import styled from "styled-components";

export const Container = styled.div`
  .title {
    display: flex;
  }

  h1 {
    font-weight: bold;
    color: #d20300;
    text-align: center;
    margin: 1rem;
  }
`;

export const MotorList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Motor = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 12rem;

  a {
    text-decoration: none;
    color: #343a40;
  }

  img {
    width: 225px;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    transition: all 0.3s;
    text-decoration: none;
  }

  img:hover {
    transform: scale(1.1);
  }

  .infoCard {
    display: flex;
    flex-direction: column;
    border: 1px solid #d20300;
    padding: 0.2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  .infoCard:hover {
    border: none;
    background: #d20300;
    color: #ffffff;
  }
`;
