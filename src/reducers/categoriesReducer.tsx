import { CategoriesActionKind, CategoriesState, CategotiesAction } from "../utils/interface";

export const InitialState: CategoriesState = {
  categories: [],
  getCategories: () => {},
};

// Reducer function that uses a switch statement to handle our actions
const CategoriesReducer = ( state: CategoriesState, action: CategotiesAction ) => {
  const { type, payload } = action;

  switch (type) {
    case CategoriesActionKind.GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};  

export default CategoriesReducer;


