// // An enum with all the types of actions to use in our reducer
// enum CategoriesActionKind {
//   GET_CATEGORIES = "GET_CATEGORIES",
// }

// //Action interface
// interface CategotiesAction {
//   type: CategoriesActionKind;
//   payload: string[];
// }

// //State interface
// interface CategoriesState {
//   categories: string[];
// }

// export const InitialState = {
//   categories: [],
// }

// // Our reducer function that uses a switch statement to handle our actions
// const CategoriesReducer = ( state: CategoriesState, action: CategotiesAction ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CategoriesActionKind.GET_CATEGORIES:
//       return {
//         ...state,
//         categories: state.categories.concat(payload),
//       };
//     default:
//       return state;
//   }
// };  

// export default CategoriesReducer;

// An enum with all the types of actions to use in our reducer
enum CategoriesActionKind {
  GET_CATEGORIES = "GET_CATEGORIES",
}

//Action interface
interface CategotiesAction {
  type: CategoriesActionKind;
  payload: string[];
}

//State interface
interface CategoriesState {
  categories: string[];
  getCategories: () => void;
}

export const InitialState: CategoriesState = {
  categories: [],
  getCategories: () => {},
};

// Our reducer function that uses a switch statement to handle our actions
const CategoriesReducer = ( state: CategoriesState, action: CategotiesAction ) => {
  const { type, payload } = action;

  switch (type) {
    case CategoriesActionKind.GET_CATEGORIES:
      return {
        ...state,
        categories:payload,
      };
    default:
      return state;
  }
};  

export default CategoriesReducer;


