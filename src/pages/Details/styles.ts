import styled from "styled-components";

export const Container = styled.div`
  main {
    padding: 40px 20px;
    max-width: 1280px;
    margin: 0 auto;

    @media (min-width: 501px) {
      padding: 70px;
    }

    @media (min-width: 1320px) {
      padding: 70px 0;
    }

    a {
      display: flex;
      align-items: center;
      width: fit-content;
      color: ${(props) => props.theme.colors.text};
      text-decoration: none;

      padding: 8px 25px;
      border-radius: 5px;
      box-shadow: 0 0 15px -6px rgba(0, 0, 0, 0.3);
      background-color: ${(props) => props.theme.colors.complement};

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const CountryDetails = styled.div`
  margin-top: 70px;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      width: 48%;
    }
  }

  img {
    width: 100%;
    margin-bottom: 40px;
    align-self: flex-start;
    max-width: 560px;

    @media (max-width: 1270px) {
      max-width: 420px;
    }
  }

  h1 {
    margin-bottom: 40px;
  }
`;

export const ContentWrapper = styled.div`
  width: 87%;
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  > div {
    margin-bottom: 40px;

    p {
      strong {
        font-weight: 600;
      }
      + p {
        margin-top: 10px;
      }
    }
  }
`;

export const BorderCountries = styled.div`
  max-width: 500px;

  p {
    font-weight: 800;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    div {
      background-color: ${(props) => props.theme.colors.complement};
      box-shadow: 0 0 15px -6px rgba(0, 0, 0, 0.3);
      padding: 5px 20px;
      margin: 0 10px 10px 0;
    }
  }
`;
