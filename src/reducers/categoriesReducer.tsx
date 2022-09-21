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
