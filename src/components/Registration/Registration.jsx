import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "../../constants";

import Button from "../Button/Button";
import Input from "../Input/Input";

function Registration() {
  const [nameReg, setName] = useState("");
  const [passwordReg, setPass] = useState("");
  const [emailReg, setMail] = useState("");
  const history = useHistory();

  const register = () => {
    axios
      .post("http://localhost:3000/register", {
        name: nameReg,
        email: emailReg,
        password: passwordReg,
      })
      .then((response) => {
        if (response.status === 201) history.push(ROUTES.LOGIN);
      })
      .catch((error) => {
        history.push("/registration");
      });
  };

  return (
    <div>
      <div>Name</div>
      <Input
        placeholder={`Enter name`}
        onChange={(event) => setName(event.target.value)}
      />
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
        <Link to={ROUTES.LOGIN}>
          <Button text="Register" onClick={register} />
        </Link>
      </div>
      <div>
        If you have an account you can <Link to={ROUTES.LOGIN}>Login</Link>
      </div>
    </div>
  );
}

export default Registration;
