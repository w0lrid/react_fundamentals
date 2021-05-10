import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/userSlice";
import axios from "axios";

function Login() {
  const [passwordLog, setPass] = useState("");
  const [mailLog, setMail] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const login = () => {
    axios
      .post("http://localhost:3000/login", {
        email: mailLog,
        password: passwordLog,
      })
      .then((response) => {
        history.push("/courses");
        dispatch(loginUser(response.data.user));
      })
      .catch((error) => alert("Invalid data."));
  };

  return (
    <div>
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
        <Button text="Login" onClick={login} />
      </div>
      <div>
        If you don't have an account you can{" "}
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
}

export default Login;
