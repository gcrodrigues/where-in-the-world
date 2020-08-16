import React from "react";

import { Container, Image, Content } from "./styles";

interface Props {
  country: string;
  population: number;
  region: string;
  capital: string;
  image: string;
}

const FlagCard: React.FC<Props> = ({
  image,
  country,
  population,
  region,
  capital,
}) => {
  return (
    <Container to={`/details/${country}`}>
      <Image>
        <img src={image} alt={country} />
      </Image>

      <Content>
        <h2>{country}</h2>

        <p>
          <span>Population: </span>
          {population}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </Content>
    </Container>
  );
};

export default FlagCard;
