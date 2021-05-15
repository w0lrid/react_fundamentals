import axios from "axios";
import { setAuthors } from "../reducers/authorReducer";

export const getAuthors = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:3000/authors/all")
      .then((response) => dispatch(setAuthors(response.data)));
  };
};

/* export const getAuthors = createAsyncThunk("author/getAuthors", () =>
  axios
    .get("http://localhost:3000/authors/all")
    .then((response) => response.data.result)
);

const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("Token"),
}; */
