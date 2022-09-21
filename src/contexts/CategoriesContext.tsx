import React, { createContext, useState, useContext, ReactNode } from "react";

type Props = {
    children: ReactNode;
}

const GetCategories = createContext({});

const CategoriesContextProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState([]);

  return (
    <GetCategories.Provider value={{ categories, setCategories }}>
      {children}
    </GetCategories.Provider>
  );
};

export default CategoriesContextProvider;

export const useCategoriesContext = () => useContext(GetCategories);
