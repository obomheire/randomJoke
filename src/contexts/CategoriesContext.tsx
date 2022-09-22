import React, {
  createContext,
  useContext,
  useReducer,
} from "react";
import chuckNorris from "../api/chuckNorris";
import categoriesReducer, { InitialState } from "../reducers/categoriesReducer";
import { CategoriesActionKind, CategoriesContextProviderProps } from "../utils/interface";

const CategoriesContext = createContext(InitialState);
const CategoriesContextProvider = ({ children, }: CategoriesContextProviderProps) => {
  const [state, dispatch] = useReducer(categoriesReducer, InitialState);

  const getCategories = async () => {
    try {
      const response = await chuckNorris.get("/categories");
      const data = await response.data;
      dispatch({ type: CategoriesActionKind.GET_CATEGORIES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    categories: state.categories,
    getCategories,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;

export const useCategories = () => {
  const context = useContext(CategoriesContext);

  if (context === undefined) {
    throw new Error(
      "GetCategoriesContext must be used within GetCategoriesContext"
    );
  }
  return context;
};
