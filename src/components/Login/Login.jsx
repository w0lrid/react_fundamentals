import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import UserForm from "../UserForm/UserForm";

function Login() {
  return (
    <div>
      <UserForm name="login" />
      <div>
        <Button text="Login" />
      </div>
      <div>
        If you don't have an account you can{" "}
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
}

export default Login;
