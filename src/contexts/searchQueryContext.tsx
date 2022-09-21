import React, { createContext, useState, useContext, ReactNode } from "react";

type Props = {
    children: ReactNode;
}

const SearchQuery = createContext({});

const SearchQueryContextProvider = ({ children }: Props) => {
  const [searchQuery, setSearchQuery] = useState([]);

  return (
    <SearchQuery.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchQuery.Provider>
  );
};

export default SearchQueryContextProvider;

export const useSearchQueryContext = () => useContext(SearchQuery);
