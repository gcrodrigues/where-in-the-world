import React, { useContext } from "react";
import { MdSearch } from "react-icons/md";
import { Container, InputWrapper, SelectWrapper } from "./styles";
import { ThemeContext } from "styled-components";

const Filters: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <InputWrapper>
        <MdSearch color={colors.input} />
        <input
          type="text"
          name="country"
          placeholder="Search for a country..."
        />
      </InputWrapper>
      <SelectWrapper>
        <select name="" id="">
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </SelectWrapper>
    </Container>
  );
};

export default Filters;
