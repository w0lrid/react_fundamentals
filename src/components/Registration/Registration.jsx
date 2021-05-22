import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { registerUser } from "../../store/actions/userActions";
import { useSuccessful } from "../../store/selectors";

import Button from "../Button/Button";
import Input from "../Input/Input";

function Registration() {
  const successful = useSuccessful();
  const [nameReg, setName] = useState("");
  const [passwordReg, setPass] = useState("");
  const [emailReg, setMail] = useState("");
  const dispatch = useDispatch();

  const user = { name: nameReg, email: emailReg, password: passwordReg };
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
        <Link to={successful ? ROUTES.LOGIN : ROUTES.REGISTRATION}>
          <Button
            text="Register"
            onClick={() => dispatch(registerUser(user))}
          />
        </Link>
      </div>
      <div>
        If you have an account you can <Link to={ROUTES.LOGIN}>Login</Link>
      </div>
    </div>
  );
}

export default Registration;
