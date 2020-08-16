import React, { useContext, ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";
import { Container, InputWrapper, SelectWrapper } from "./styles";
import { ThemeContext } from "styled-components";
import ApiContext from "../../Context/ApiContext";

const Filters: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const {
    searchCountry,
    setSearchCountry,
    setSelectedRegion,
    selectedRegion,
  } = useContext(ApiContext);
  return (
    <Container>
      <InputWrapper>
        <MdSearch color={colors.input} />
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setSearchCountry(e.target.value)
          }
          value={searchCountry}
          type="text"
          name="country"
          placeholder="Search for a country..."
        />
      </InputWrapper>
      <SelectWrapper>
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
            setSelectedRegion(e.target.value)
          }
          value={selectedRegion}
          name="region"
          id="region"
        >
          <option value="0">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </SelectWrapper>
    </Container>
  );
};

export default Filters;
