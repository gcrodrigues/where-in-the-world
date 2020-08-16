import React from "react";

import { LayoutProvider } from "./Context/LayoutContext";
import Routes from "./routes";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <LayoutProvider>
      <Routes />
      <GlobalStyles />
    </LayoutProvider>
  );
}

export default App;
