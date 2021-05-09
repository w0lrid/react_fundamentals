import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button(props, { type }) {
  return (
    <button type={type} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
