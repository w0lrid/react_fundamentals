import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NewCourseForm.module.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

function NewCourseForm(props) {
  return (
    <>
      <h3 className={styles.title}>Title</h3>
      <div>
        <Input placeholder="Enter course name" />
        <Link to="/courses">
          <Button text="Create course" />
        </Link>
      </div>
      <h3 className={styles.title}>Description</h3>
      <Input placeholder="Enter description" />
    </>
  );
}

NewCourseForm.propTypes = {
  state: PropTypes.string,
};

export default NewCourseForm;
