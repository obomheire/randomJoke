import { ReactNode } from "react";

export type searchBarProps = {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: () => void;
};

export enum CategoriesActionKind {
  GET_CATEGORIES = "GET_CATEGORIES",
}

export type CategoriesContextProviderProps = {
  children: ReactNode;
};

export type SearchQueryContextProviderProps = {
  children: ReactNode;
};

export enum SearchQuaryActionKind {
  SEARCH_QUERY = "SEARCH_QUERY",
}

//Categories Action interface
export interface CategotiesAction {
  type: CategoriesActionKind;
  payload: string[];
}

//Categories State interface
export interface CategoriesState {
  categories: string[];
  getCategories: () => void;
}

//SearchQuery Action interface
export interface SearchQueryAction {
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

//SearchQuery State interface
export interface SearchQueryState {
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

export type Category = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

export type SearchBarTitleProps = {
  data: string[];
};


