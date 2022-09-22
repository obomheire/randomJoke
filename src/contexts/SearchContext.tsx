import React, { createContext, useContext, ReactNode, useReducer } from "react";
import chuckNorris from "../api/chuckNorris";
import queryReducer, { InitialState } from "../reducers/searchQueryReducer";

enum SearchQuaryActionKind {
  SEARCH_QUERY = "SEARCH_QUERY",
}

type Props = {
  children: ReactNode;
};

const SearchQueryContext = createContext(InitialState);

const SearchQueryContextProvider = ({ children }: Props) => {
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

export const useQuery = () => {
  const context = useContext(SearchQueryContext);

  if (context === undefined) {
    throw new Error(
      "SearchQueryContext must be used within SearchQueryContext"
    );
  }
  return context;
};
