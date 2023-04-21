import React, { createContext, useState } from "react";

const SimpleContext = createContext();

const SimpleProvider = ({ children }) => {
  const [value, setValue] = useState("Hello, World!");

  return (
    <SimpleContext.Provider value={{ value, setValue }}>
      {children}
    </SimpleContext.Provider>
  );
};

export { SimpleProvider, SimpleContext };
