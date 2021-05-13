import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styles from "./UpdateCourse.module.css";

import { createAuthor } from "../../store/slices/authorSlice";
import { updateCourse } from "../../store/slices/courseSlice";
import InputForm from "../InputForm/InputForm";
import Button from "../Button/Button";

function UpdateCourse() {
  const [course] = useSelector((state) => state.courseReducer.course);
  const authors = useSelector((state) => state.authorReducer.authors);
  const [courseAuthors, setCourseAuthors] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const update = (data) => {
    dispatch(
      updateCourse({
        id: course.id,
        title: data.title,
        creationDate: course.date,
        description: data.description,
        duration:
          data.duration === course.duration
            ? Number.parseInt(course.duration)
            : Number.parseInt(data.duration / 60),
        authors: course.authors.concat(
          courseAuthors.map((author) => author.id)
        ),
      })
    );
    history.push("/courses");
  };
  const createNewAuthor = (data) => {
    dispatch(
      createAuthor({
        name: data.name,
      })
    );
  };
  const addAuthor = (author) => {
    setCourseAuthors([...courseAuthors, author]);
  };

  function searchAuthor(course) {
    return authors
      .filter((author) => course.authors.includes(author.id))
      .map((author) => <div>{author.name}</div>);
  }

  return (
    <>
      <div className={styles.infoContainer}>
        <form onSubmit={handleSubmit(update)} className={styles.form}>
          <InputForm
            label="title"
            placeholder={course.title}
            register={register}
            required
          />
          <InputForm
            label="description"
            placeholder={course.description}
            register={register}
            required
          />
          <Button type="submit" text="Update course" />
        </form>
        <form onSubmit={handleSubmit2(createNewAuthor)} className={styles.form}>
          <InputForm label="name" register={register2} />
          <Button type="submit" text="Create author" />
        </form>
        <div className={styles.form}>
          <InputForm
            label="duration"
            placeholder={course.duration}
            register={register}
            required
          />
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
        {searchAuthor(course)}
        {courseAuthors.map((author) => (
          <div>{author.name}</div>
        ))}
      </div>
    </>
  );
}

export default UpdateCourse;
