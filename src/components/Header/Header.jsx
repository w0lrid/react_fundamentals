import React from "react";
import styles from "./Header.module.css";

import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { useSelector } from "react-redux";

function Header(props) {
  const name = useSelector((state) => state.userReducer.user.name);
  return (
    <header>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.name}>
        <h1>{name}</h1>
      </div>
      <Button text="Logout" />
    </header>
  );
}

export default Header;
