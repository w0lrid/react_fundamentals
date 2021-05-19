import axios from "axios";
import { createAuthor, setAuthors } from "../reducers/authorReducer";

const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("Token"),
};

export const getAuthors = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:3000/authors/all")
      .then((response) => dispatch(setAuthors(response.data)));
  };
};

export const createAuthorAction = (author) => {
  return (dispatch) => {
    debugger;
    axios
      .post("http://localhost:3000/authors/add", author, {
        headers: headers,
      })
      .then((response) => dispatch(createAuthor(response.data)));
  };
};
