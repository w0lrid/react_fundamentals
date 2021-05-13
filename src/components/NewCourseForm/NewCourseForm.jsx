import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styles from "./NewCourseForm.module.css";

import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../../store/slices/courseSlice";
import { createAuthor } from "../../store/slices/authorSlice";
import InputForm from "../InputForm/InputForm";

function NewCourseForm(props) {
  const authors = useSelector((state) => state.authorReducer.authors);
  const [courseAuthors, setCourseAuthors] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const createCourse = (data) => {
    dispatch(
      addCourse({
        id: courseId,
        title: data.title,
        description: data.description,
        creationDate: date,
        duration: data.duration / 60,
        authors: courseAuthors.map((author) => author.id),
      })
    );
    history.push("/courses");
  };
  const createNewAuthor = (data) => {
    dispatch(
      createAuthor({
        name: data.name,
        id: authorId,
      })
    );
  };
  const addAuthor = (author) => {
    setCourseAuthors([...courseAuthors, author]);
  };

  const courseId = (Math.random() * 100).toString();
  const authorId = (Math.random() / 100).toString();
  const today = new Date();
  const date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  return (
    <>
      <div className={styles.infoContainer}>
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
          <div>
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
