import React from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NewCourseForm.module.css";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addCourse } from "../../store/slices/courseSlice";

function NewCourseForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const createCourse = () => {
    dispatch(
      addCourse({
        id: "course3",
        title: "Java Core",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        creationDate: "8/3/2021",
        duration: 160,
        authors: ["author1", "author2"],
      })
    );
    history.push("/courses");
  };

  return (
    <>
      <h3 className={styles.title}>Title</h3>
      <div>
        <Input placeholder="Enter course name" />
        <Link to="/courses">
          <Button text="Create course" onClick={createCourse} />
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
