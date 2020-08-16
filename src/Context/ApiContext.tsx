import React, { createContext, useState } from "react";

interface ContextProps {
  setSelectedRegion: (value: string) => void;
  setSearchCountry: (value: string) => void;
  selectedRegion: string;
  searchCountry: string;
}
const ApiContext = createContext<ContextProps>({
  setSelectedRegion: () => null,
  setSearchCountry: () => null,
  selectedRegion: "0",
  searchCountry: "",
});

export const ApiProvider: React.FC = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState("0");
  const [searchCountry, setSearchCountry] = useState("");

  return (
    <ApiContext.Provider
      value={{
        setSelectedRegion,
        setSearchCountry,
        selectedRegion,
        searchCountry,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
