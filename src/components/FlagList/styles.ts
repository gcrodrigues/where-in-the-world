import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 70px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);

  justify-items: center;
  @media (max-width: 667px) {
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;
