const SET_AUTHORS = "SET_AUTHORS";
const CREATE_AUTHOR = "CREATE_AUTHOR";

const initialState = { authors: [], status: false };

export default function authorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: action.payload.result,
        status: action.payload.successful,
      };
    case CREATE_AUTHOR:
      return {
        ...state,
        authors: state.authors.concat(action.payload.result),
      };
    default:
      return state;
  }
}

export const setAuthors = (response) => ({
  type: SET_AUTHORS,
  payload: response,
});

export const createAuthor = (response) => ({
  type: CREATE_AUTHOR,
  payload: response,
});
