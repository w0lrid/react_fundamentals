import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* const initialState = {
  authors: [
    {
      id: "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
      name: "Vasiliy Dobkin",
    },
    {
      id: "f762978b-61eb-4096-812b-ebde22838167",
      name: "Nicolas Kim",
    },
    {
      id: "df32994e-b23d-497c-9e4d-84e4dc02882f",
      name: "Anna Sidorenko",
    },
    {
      id: "095a1817-d45b-4ed7-9cf7-b2417bcbf748",
      name: "Valentina Larina",
    },
  ],
};
 */
const initialState = { status: "idle", error: null, authors: [] };

export const getAuthors = createAsyncThunk("author/getAuthors", () =>
  axios
    .get("http://localhost:3000/authors/all")
    .then((response) => response.data.result)
);

const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("Token"),
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    createAuthor(state, action) {
      axios
        .post("http://localhost:3000/authors/add", action.payload, {
          headers: headers,
        })
        .then((response) => console.log(response));
      state.authors.push(action.payload);
    },
  },
  extraReducers: {
    [getAuthors.pending]: (state) => {
      state.status = "loading";
    },
    [getAuthors.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.authors = state.authors.concat(action.payload);
    },
    [getAuthors.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { createAuthor } = authorSlice.actions;

export default authorSlice.reducer;
