import React, { useState, useEffect } from "react";
import FlagCard from "../../components/FlagCard";
import { Container } from "./styles";
import api from "../../services/api";

interface Flag {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const FlagList: React.FC = () => {
  const [flags, setFlags] = useState<Flag[]>([]);

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

  return (
    <Container>
      {flags.map((flag) => (
        <FlagCard
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
