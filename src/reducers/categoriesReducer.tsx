enum ReducerActionTypes {
  GET_CATEGORIES = "GET_CATEGORIES",
}

//Action interface
interface ReducerAction {
  type: ReducerActionTypes;
  payload: {
    categories: string[];
  };
}

//State interface
interface InilState {
  categories: string[];
};

export const InitialState = {
  categories: [],
}

const CategoriesReducer = (state: InilState, action: ReducerAction) => {

  const { type, payload } = action;

  switch (type) {
    case ReducerActionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: payload.categories,
      };
    default:
      return state;
  }
};

export default CategoriesReducer;

// type InitialState = {
//     categories: string[];
//     created_at: string;
//     icon_url: string;
//     id: string;
//     updated_at: string;
//     url: string;
//     value: string;
// }

// enum ReducerActionTypes {
//     GET_CATEGORIES = "GET_CATEGORIES",
//     GET_SEARCH_QUERY = "GET_SEARCH_QUERY",
// }

// interface ReductActionTypesA {
//   type: ReducerActionTypes.GET_CATEGORIES;
//   categories: string[];
// }
// interface ReductActionTypesB {
//   type: ReducerActionTypes.GET_SEARCH_QUERY;
//   search_query: string[];
// }

// type ReducerAction = ReductActionTypesA | ReductActionTypesB;

// export const CategoriesReducer = (state: InitialState, action: ReducerAction) => {
//   switch (action.type) {
//     case "GET_CATEGORIES":
//       return {
//         categories: action.categories,
//       };
//       case "GET_SEARCH_QUERY":
//           return {
//             search_query: action.search_query,
//           }
//     default:
//       return state;
//   }
// };