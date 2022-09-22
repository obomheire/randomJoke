import { SearchQuaryActionKind, SearchQueryAction, SearchQueryState } from "../utils/interface";

export const InitialState: SearchQueryState = {
  searchQuery: [
    {
      categories: [],
      created_at: "",
      icon_url: "",
      id: "",
      updated_at: "",
      url: "",
      value: "",
    },
  ],
  getSearchQuery: () => {},
};

// Reducer function that uses a switch statement to handle our actions
const SearchQueryReducer = ( state: SearchQueryState, action: SearchQueryAction ) => {
  const { type, payload } = action;

  switch (type) {
    case SearchQuaryActionKind.SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload,
      };
    default:
      return state;
  }
};

export default SearchQueryReducer;
