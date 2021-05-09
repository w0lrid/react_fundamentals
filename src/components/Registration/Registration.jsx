import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import Input from "../Input/Input";

function Registration() {
  const [username, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");

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
      register(db);
    };
    request.onerror = (event) => {
      console.log(`ERROR: ${event.target.error} was found`);
    };
  }

  function register(db) {
    const user = {
      name: username,
      email: mail,
      password: pass,
    };

    const regUser = db.transaction("registered_users", "readwrite");
    regUser.onerror = (event) => {
      console.log(event.target.error);
    };
    const registered = regUser.objectStore("registered_users");
    registered.add(user);
  }

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
          <Button text="Register" onClick={createDB} />
        </Link>
      </div>
      <div>
        If you have an account you can <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Registration;
