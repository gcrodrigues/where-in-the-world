import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.complement};
  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.4);

  > div {
    width: 100%;
    max-width: 1280px;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 500px) {
      padding: 20px 70px;
    }

    @media (min-width: 1320px) {
      padding: 20px 0;
    }
  }

  h1 {
    font-size: 1rem;

    @media (min-width: 500px) {
      font-size: 1.5rem;
    }
  }

  div {
    display: flex;
    align-items: center;
  }
`;
