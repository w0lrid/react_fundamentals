const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

const initialState = {
  user: { token: "", name: "", email: "", isAuth: false },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.result,
        name: action.payload.user.name,
        email: action.payload.user.email,
        isAuth: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: "",
        name: "",
        email: "",
        isAuth: false,
      };
    default:
      return state;
  }
}

export const login = (response) => ({
  type: LOGIN_USER,
  payload: response,
});

export const logout = (response) => ({
  type: LOGOUT_USER,
  payload: response,
});
