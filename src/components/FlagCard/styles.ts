import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled(Link)`
  width: 100%;
  height: 100%;
  max-width: 400px;
  min-width: 240px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  border-radius: 5px;
  box-shadow: 0 0 12px -5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 0.2s;

  text-decoration: none;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    transform: scale(1.01);
  }
`;

export const Image = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 200px;
  background-position: center;
  border-radius: 5px 5px 0 0;

  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
    /* max-width: 400px; */
    height: 100%;
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
