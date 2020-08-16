import React from "react";

import { LayoutProvider } from "./Context/LayoutContext";
import { ApiProvider } from "./Context/ApiContext";
import Routes from "./routes";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <LayoutProvider>
      <ApiProvider>
        <Routes />
        <GlobalStyles />
      </ApiProvider>
    </LayoutProvider>
  );
}

export default App;
