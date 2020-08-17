import React, { useEffect, useState } from "react";

import { RouteComponentProps, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../components/Header";
import {
  Container,
  CountryDetails,
  ContentWrapper,
  BorderCountries,
} from "./styles";
import api from "../../services/api";

interface MatchParams {
  name: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

interface Detail {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  flag: string;
  currencies: { name: string }[];
  languages: { name: string }[];
  borders: string[];
}

const Details: React.FC<Props> = ({ match }) => {
  const [details, setDetails] = useState({} as Detail);

  useEffect(() => {
    const countryParam = match.params.name;
    async function fetchCountryDetails() {
      try {
        const { data } = await api.get(`/name/${countryParam}`);
        setDetails(data[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCountryDetails();

    //eslint-disable-next-line
  }, []);
  return (
    <Container>
      <Header />
      <main>
        <Link to="/">
          <FiArrowLeft size={20} /> Back
        </Link>

        <CountryDetails>
          <img src={details.flag} alt={`${details.name} Flag`} />

          <div>
            <h1>{details.name}</h1>
            <ContentWrapper>
              <div>
                <p>
                  <strong>Native Name: </strong>
                  {details.nativeName}
                </p>
                <p>
                  <strong>Population: </strong>
                  {details.population}
                </p>
                <p>
                  <strong>Region: </strong>
                  {details.region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {details.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {details.capital}
                </p>
              </div>

              <div>
                <p>
                  <strong>Top Level Domain: </strong>
                  {details.topLevelDomain &&
                    details.topLevelDomain.map((domain) => domain).join(", ")}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {details.currencies &&
                    details.currencies
                      .map((currency) => currency.name)
                      .join(", ")}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {details.languages &&
                    details.languages.map((lang) => lang.name).join(", ")}
                </p>
              </div>
            </ContentWrapper>

            <BorderCountries>
              <p>Border Countries: </p>
              <div>
                {details.borders &&
                  details.borders.map((border) => (
                    <div key={border}>{border}</div>
                  ))}
              </div>
            </BorderCountries>
          </div>
        </CountryDetails>
      </main>
    </Container>
  );
};

export default Details;
