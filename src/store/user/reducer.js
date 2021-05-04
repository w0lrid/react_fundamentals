import { LOGIN_USER } from "./actionTypes";

const initialState = {
  user: { isAuth: false, name: "", email: "" },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action.name);
      return [
        state.user,
        {
          name: action.name,
          email: action.email,
        },
      ];
    default:
      return state;
  }
}

export default userReducer;
