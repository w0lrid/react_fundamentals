/* import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: { token: "", name: "", email: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = {
        token: action.payload.result,
        name: action.payload.user.name,
        email: action.payload.user.email,
      };
    },
    logoutUser(state) {
      state.user = initialState.user;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
 */
