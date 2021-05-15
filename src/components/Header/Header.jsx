import React, { useEffect } from "react";
import styles from "./Header.module.css";

import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/userActions";
import { useHistory } from "react-router";

function Header() {
  const history = useHistory();
  const name = useSelector((state) => state.userReducer.name);
  const dispatch = useDispatch();

  const logoutButton = (condition) =>
    condition ? (
      <Button
        text="Logout"
        onClick={() => {
          dispatch(logoutUser());
          history.push("/login");
        }}
      />
    ) : (
      ""
    );

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
