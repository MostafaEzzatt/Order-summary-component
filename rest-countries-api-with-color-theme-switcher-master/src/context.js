import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const Context = ({ children }) => {
  const [region, setRegion] = useState("All");
  const [country, setCountry] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  const contextValue = {
    region,
    setRegion,
    country,
    setCountry,
    darkTheme,
    setDarkTheme,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Context, useGlobalContext };
