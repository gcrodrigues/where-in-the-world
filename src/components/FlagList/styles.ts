import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 70px;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);

  @media (max-width: 667px) {
    justify-items: center;
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;
