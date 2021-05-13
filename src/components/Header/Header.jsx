import React, { useEffect } from "react";
import styles from "./Header.module.css";

import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/slices/userSlice";
import { useHistory } from "react-router";
import axios from "axios";

function Header() {
  const history = useHistory();
  const name = useSelector((state) => state.userReducer.user.name);
  const dispatch = useDispatch();

  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("Token"),
  };

  async function logout() {
    let promise = new Promise(() => {
      setTimeout(() => {
        localStorage.removeItem("Token");
        localStorage.removeItem("Email");
      }, 1000);
    });
    axios.delete("http://localhost:3000/logout", { headers: headers });
    history.push("/login");
    dispatch(logoutUser());
    let result = await promise;
    result();
  }

  const logoutButton = (condition) =>
    condition ? <Button text="Logout" onClick={logout} /> : "";

  useEffect(() => logoutButton(name), []);

  return (
    <header>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.name}>
        <h1>{name}</h1>
      </div>
      {logoutButton(
        localStorage.getItem("Email") && localStorage.getItem("Token")
      )}
    </header>
  );
}

export default Header;
