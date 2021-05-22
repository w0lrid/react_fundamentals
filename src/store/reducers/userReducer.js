const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

const initialState = {
  token: "",
  name: "",
  email: "",
  isAuth: false,
  successful: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        successful: action.payload,
      };
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

export const register = (response) => ({
  type: REGISTER_USER,
  payload: response,
});
export const login = (response) => ({
  type: LOGIN_USER,
  payload: response,
});

export const logout = (response) => ({
  type: LOGOUT_USER,
  payload: response,
});
