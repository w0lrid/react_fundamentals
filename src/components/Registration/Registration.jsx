import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import UserForm from "../UserForm/UserForm";

function Registration() {
  return (
    <div>
      <UserForm name="registration" />
      <div>
        <Button text="Register" />
      </div>
      <div>
        If you have an account you can <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Registration;
