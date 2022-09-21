import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useReducer,
} from "react";
import chuckNorris from "../api/chuckNorris";
import categoriesReducer, { InitialState } from "../reducers/categoriesReducer";

enum CategoriesActionKind {
  GET_CATEGORIES = "GET_CATEGORIES",
}

type Props = {
  children: ReactNode;
};

const CategoriesContext = createContext(InitialState);

const CategoriesContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(categoriesReducer, InitialState);

  const getCategories = async () => {
    try {
      const response = await chuckNorris.get("/categories");
      const res = await response.data;
      const data = state.categories.concat(res);
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
