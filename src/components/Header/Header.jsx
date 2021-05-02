import React from "react";
import styles from "./Header.module.css";

import Button from "../Button/Button";
import Logo from "../Logo/Logo";

function Header(props) {
  return (
    <header>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.name}>
        <h1>{props.name}</h1>
      </div>
      <Button text="Logout" />
    </header>
  );
}

export default Header;
