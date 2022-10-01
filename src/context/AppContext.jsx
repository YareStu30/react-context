import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const endpoint = "/fotos.json";

  const dataConsult = async () => {
    const response = await (await fetch(endpoint)).json();
    const dataImg = response.photos;
    setData(dataImg);
    console.log(dataImg);
  };

  useEffect(() => {
    dataConsult();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
