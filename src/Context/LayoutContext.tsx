import React, { createContext, useState } from "react";

import { ThemeProvider } from "styled-components";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface ContextProps {
  toggleTheme: Function;
}
const LayoutContext = createContext<ContextProps>({
  toggleTheme: () => null,
});

export const LayoutProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    setTheme(theme.title === "dark" ? light : dark);
  }

  return (
    <LayoutContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
