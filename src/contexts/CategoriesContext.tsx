import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useReducer,
} from "react";
import chuckNorris from "../api/chuckNorris";
import categoriesReducer, { InitialState } from "../reducers/categoriesReducer";

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

type Props = {
  children: ReactNode;
};

const GetCategoriesContext = createContext({});

const CategoriesContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(categoriesReducer, InitialState);

  const getCategories = async () => {
      try {
          const response = await chuckNorris.get("/categories");
          const data = await response.data;
          dispatch({ type: ReducerActionTypes.GET_CATEGORIES, payload: data });
        //   console.log(data)
          
      } catch (error) { 
            console.log(error);
      }

  };

  const value = {
    getCategories
  };

  return (
    <GetCategoriesContext.Provider value={value}>
      {children}
    </GetCategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;

export const useCategoriesContext = () => {
  const context = useContext(GetCategoriesContext);

  if (context === undefined) {
    throw new Error(
      "GetCategoriesContext must be used within GetCategoriesContext"
    );
  }
    return context;
};
