import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  min-width: 240px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 0 12px -5px rgba(0, 0, 0, 0.4);
`;

export const Image = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  background-position: center;
  border-radius: 5px 5px 0 0;

  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 200px;
  }
`;

export const Content = styled.div`
  background: ${(props) => props.theme.colors.complement};
  border-radius: 0 0 5px 5px;
  padding: 25px;

  h2 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  p {
    margin-top: 5px;
  }

  span {
    font-weight: 600;
  }
`;
