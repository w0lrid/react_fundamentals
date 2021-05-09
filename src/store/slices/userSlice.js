import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { isAuth: false, name: "", email: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = {
        isAuth: true,
        name: action.payload.name,
        email: action.payload.email,
      };
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
