enum SearchQuaryActionKind {
  SEARCH_QUERY = "SEARCH_QUERY",
}

//Action interface
interface SearchQueryAction {
  type: SearchQuaryActionKind;
  payload: [
    {
      categories: string[];
      created_at: string;
      icon_url: string;
      id: string;
      updated_at: string;
      url: string;
      value: string;
    }
  ];
}

//State interface
interface SearchQueryState {
  searchQuery: [
    {
      categories: string[];
      created_at: string;
      icon_url: string;
      id: string;
      updated_at: string;
      url: string;
      value: string;
    }
  ];
  getSearchQuery: (searchTerm: string) => void;
}

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

// Our reducer function that uses a switch statement to handle our actions
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
