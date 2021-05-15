const SET_AUTHORS = "SET_AUTHORS";

const initialState = { authors: [], status: false };

export default function authorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: action.payload.result,
        status: action.payload.successful,
      };
    default:
      return state;
  }
}

export const setAuthors = (response) => ({
  type: SET_AUTHORS,
  payload: response,
});
