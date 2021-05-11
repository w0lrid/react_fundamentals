import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    createAuthor(state, action) {
      state.authors.push(action.payload);
    },
  },
});

export const { createAuthor } = authorSlice.actions;

export default authorSlice.reducer;
