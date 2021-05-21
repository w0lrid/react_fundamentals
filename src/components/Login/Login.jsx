import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ROUTES } from "../../constants";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions/userActions";
import { useUserIsAuth } from "../../store/selectors";

function Login() {
  const [passwordLog, setPass] = useState("");
  const [mailLog, setMail] = useState("");
  const dispatch = useDispatch();

  const user = {
    email: mailLog,
    password: passwordLog,
  };

  const isAuth = useUserIsAuth();
  return (
    <div>
      {isAuth ? (
        <Redirect push to={ROUTES.COURSES} />
      ) : (
        <>
          <div>Email</div>
          <Input
            placeholder={`Enter email`}
            onChange={(event) => setMail(event.target.value)}
          />
          <div>Password</div>
          <Input
            placeholder={`Enter password`}
            onChange={(event) => setPass(event.target.value)}
          />
          <div>
            <Button
              text="Login"
              onClick={() => {
                dispatch(loginUser(user));
              }}
            />
          </div>
          <div>
            If you don't have an account you can{" "}
            <Link to={ROUTES.REGISTRATION}>Registration</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
