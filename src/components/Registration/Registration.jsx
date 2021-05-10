import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import Input from "../Input/Input";

function Registration() {
  const [nameReg, setName] = useState("");
  const [passwordReg, setPass] = useState("");
  const [emailReg, setMail] = useState("");

  const register = () => {
    axios
      .post("http://localhost:3000/register", {
        name: nameReg,
        email: emailReg,
        password: passwordReg,
      })
      .then((response) => console.log(response));
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
        <Link to="/login">
          <Button text="Register" onClick={register} />
        </Link>
      </div>
      <div>
        If you have an account you can <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Registration;
