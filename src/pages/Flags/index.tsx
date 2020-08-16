import React from "react";

import Header from "../../components/Header";
import FlagList from "../../components/FlagList";
import Filters from "../../components/Filters";
import { Container, Main } from "./styles";

const Flags: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Filters />
        <FlagList />
      </Main>
    </Container>
  );
};

export default Flags;
