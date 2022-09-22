import React, { createContext, useContext, ReactNode, useReducer } from "react";
import chuckNorris from "../api/chuckNorris";
import queryReducer, { InitialState } from "../reducers/searchQueryReducer";
import { SearchQuaryActionKind, SearchQueryContextProviderProps } from "../utils/interface";

const SearchQueryContext = createContext(InitialState);

const SearchQueryContextProvider = ({ children, }: SearchQueryContextProviderProps) => {
  const [state, dispatch] = useReducer(queryReducer, InitialState);

  const getSearchQuery = async (searchTerm: string) => {
    try {
      const response = await chuckNorris.get(`/search?query=${searchTerm}`, {
        params: {
          limit: 50,
          term: searchTerm,
        },
      });

      const data = await response.data.result;
      dispatch({ type: SearchQuaryActionKind.SEARCH_QUERY, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    searchQuery: state.searchQuery,
    getSearchQuery,
  };

  return (
    <SearchQueryContext.Provider value={value}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export default SearchQueryContextProvider;

export const useSearchQuery = () => {
  const context = useContext(SearchQueryContext);

  if (context === undefined) {
    throw new Error(
      "SearchQueryContext must be used within SearchQueryContext"
    );
  }
  return context;
};
