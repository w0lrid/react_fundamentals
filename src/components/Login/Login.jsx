import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/userSlice";

function Login() {
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  function createDB() {
    let db;
    const request = indexedDB.open("users", 1);

    request.onupgradeneeded = (event) => {
      db = event.target.result;

      const registeredUsers = db.createObjectStore("registered_users", {
        keyPath: "email",
      });
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      login(db);
    };
    request.onerror = (event) => {
      console.log(`ERROR: ${event.target.error} was found`);
    };
  }

  function login(db) {
    let flag = false;
    const regUser = db.transaction("registered_users");
    const registeredUsers = regUser.objectStore("registered_users");
    const req = registeredUsers.get(mail);
    req.onsuccess = (event) => {
      let user = event.target.result;
      if (user) {
        if (user.password === pass) {
          dispatch(loginUser(user));
          history.push("/courses");
        } else console.log("incorrect pass");
      } else {
        console.log("user not found");
      }
    };
    regUser.onerror = (event) => {
      console.log(event.target.errorCode);
    };

    return flag;
  }

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
        <Button text="Login" onClick={createDB} />
      </div>
      <div>
        If you don't have an account you can{" "}
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
}

export default Login;
