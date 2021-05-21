import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { USER } from "../../constants";
import { useUserName } from "../../store/selectors";
import { ROUTES } from "../../constants";

import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/userActions";
import { Link } from "react-router-dom";

function Header() {
  const name = useUserName();
  const dispatch = useDispatch();

  const logoutButton = (condition) =>
    condition ? (
      <Link to={ROUTES.LOGIN}>
        <Button
          text="Logout"
          onClick={() => {
            dispatch(logoutUser());
          }}
        />
      </Link>
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
        localStorage.getItem(USER.EMAIL) && localStorage.getItem(USER.TOKEN)
      )}
    </header>
  );
}

export default Header;
