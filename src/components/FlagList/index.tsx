import React, { useState, useEffect, useContext } from "react";
import FlagCard from "../../components/FlagCard";
import { Container } from "./styles";
import api from "../../services/api";
import ApiContext from "../../Context/ApiContext";

interface Flag {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const FlagList: React.FC = () => {
  const [flags, setFlags] = useState<Flag[]>([]);
  const { selectedRegion, searchCountry } = useContext(ApiContext);

  useEffect(() => {
    async function handleFlagsData() {
      try {
        const response = await api.get("all");
        setFlags(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    handleFlagsData();
  }, []);

  useEffect(() => {
    async function handleRegionCountries() {
      try {
        if (selectedRegion === "0") {
          const response = await api.get("all");
          setFlags(response.data);
        } else {
          const response = await api.get(`region/${selectedRegion}`);
          setFlags(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    handleRegionCountries();
  }, [selectedRegion]);

  useEffect(() => {
    async function handleSearchCountriesByName() {
      try {
        if (searchCountry === "") {
          return;
        }
        const response = await api.get(`name/${searchCountry}`);
        setFlags(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    handleSearchCountriesByName();
  }, [searchCountry]);

  return (
    <Container>
      {flags.map((flag) => (
        <FlagCard
          key={flag.name}
          image={flag.flag}
          country={flag.name}
          population={flag.population}
          region={flag.region}
          capital={flag.capital}
        />
      ))}
    </Container>
  );
};

export default FlagList;
