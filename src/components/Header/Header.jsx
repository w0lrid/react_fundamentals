import React, { useEffect } from "react";
import styles from "./Header.module.css";

import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/slices/userSlice";
import { useHistory } from "react-router";

function Header() {
  const history = useHistory();
  const name = useSelector((state) => state.userReducer.user.name);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Email");
    history.push("/login");
    dispatch(logoutUser());
  };

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
