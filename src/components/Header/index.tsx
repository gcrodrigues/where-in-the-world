import React, { useContext } from "react";
import LayoutContenxt from "../../Context/LayoutContext";
import { ThemeContext } from "styled-components";
import { darken } from "polished";
import { FaMoon, FaSun } from "react-icons/fa";

import Switch from "react-switch";
import { Container } from "./styles";

const Header: React.FC = () => {
  const { toggleTheme } = useContext(LayoutContenxt);
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Where in the world?</h1>
      <div>
        <FaMoon style={{ marginRight: 5 }} />
        <Switch
          onChange={() => toggleTheme()}
          checked={title === "dark" ? false : true}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={50}
          handleDiameter={20}
          color="#fff"
          onColor={colors.switchOn}
          offColor={darken(0.25, colors.switchOn)}
        />
        <FaSun style={{ marginLeft: 5 }} />
      </div>
    </Container>
  );
};

export default Header;
