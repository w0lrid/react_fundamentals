import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
