import React, { useState } from "react";
import { v4 } from "uuid";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styles from "./NewCourseForm.module.css";
import { useAuthor } from "../../store/selectors";

import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { sendCourse } from "../../store/actions/courseActions";
import { createAuthorAction } from "../../store/actions/authorActions";
import InputForm from "../InputForm/InputForm";

function NewCourseForm() {
  const authors = useAuthor();
  const [courseAuthors, setCourseAuthors] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const createCourse = (data) => {
    dispatch(
      sendCourse({
        title: data.title,
        description: data.description,
        duration: data.duration / 60,
        authors: courseAuthors.map((author) => author.id),
      })
    );
    history.push("/courses");
  };
  const createNewAuthor = (data) => {
    dispatch(
      createAuthorAction({
        name: data.name,
      })
    );
  };
  const addAuthor = (author) => {
    setCourseAuthors([...courseAuthors, author]);
  };

  let uuid = () => v4();

  return (
    <>
      <div data-testid="newcourseform" className={styles.infoContainer}>
        <form onSubmit={handleSubmit(createCourse)} className={styles.form}>
          <InputForm label="title" register={register} required />
          <InputForm label="description" register={register} required />
          <Button type="submit" text="Create course" />
        </form>
        <form onSubmit={handleSubmit2(createNewAuthor)} className={styles.form}>
          <InputForm label="name" register={register2} />
          <Button type="submit" text="Create author" />
        </form>
        <div className={styles.form}>
          <InputForm label="duration" register={register} required />
        </div>
      </div>
      <div className={styles.authorContainer}>
        <h2>Authors</h2>
        {authors.map((author) => (
          <div data-testid="authors" key={uuid}>
            {author.name}{" "}
            <Button
              onClick={() => {
                addAuthor(author);
              }}
              text="Add author"
            />
          </div>
        ))}
        <h2>Course authors</h2>
        {courseAuthors.map((author) => (
          <div>{author.name}</div>
        ))}
      </div>
    </>
  );
}

NewCourseForm.propTypes = {
  state: PropTypes.string,
};

export default NewCourseForm;
