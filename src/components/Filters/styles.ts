import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 40px;
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  background: ${(props) => props.theme.colors.complement};
  width: 40%;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0 15px -6px rgba(0, 0, 0, 0.3);

  @media (max-width: 599px) {
    margin-bottom: 10px;
  }

  svg {
    position: absolute;
    left: 12.5px;
  }

  input {
    width: 100%;
    min-width: 250px;
    padding: 13px 25px 13px 50px;
    font-size: 16px;
    border: 0;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.complement};
    color: ${(props) => props.theme.colors.input};
    ::-webkit-input-placeholder {
      color: ${(props) => darken(0.2, props.theme.colors.input)};
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  padding: 15px 21px 15px 10.5px;
  justify-content: center;
  background: ${(props) => props.theme.colors.complement};
  border-radius: 5px;
  box-shadow: 0 0 15px -6px rgba(0, 0, 0, 0.3);

  select {
    background: ${(props) => props.theme.colors.complement};
    color: ${(props) => props.theme.colors.input};
    border: 0;
    padding: 0px 10.5px;
  }
`;
