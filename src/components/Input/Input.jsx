import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

function Input(props) {
  return (
    <>
      <input type="search" placeholder={props.placeholder} />
    </>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
