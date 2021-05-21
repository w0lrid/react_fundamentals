import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import styles from "./UpdateCourse.module.css";

import { createAuthorAction } from "../../store/actions/authorActions";
import { updateCourse } from "../../store/actions/courseActions";
import InputForm from "../InputForm/InputForm";
import Button from "../Button/Button";
import axios from "axios";
import { useAuthor } from "../../store/selectors";

function UpdateCourse() {
  const [course, setCourse] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchData = async (id = location.state.id) => {
      const response = await axios.get(`http://localhost:3000/courses/${id}`);

      setCourse(response.data.result);
    };
    fetchData();
  }, []);

  const authors = useAuthor();
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
      createAuthorAction({
        name: data.name,
      })
    );
  };
  const addAuthor = (author) => {
    setCourseAuthors([...courseAuthors, author]);
  };

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
        {courseAuthors.map((author) => (
          <div>{author.name}</div>
        ))}
      </div>
    </>
  );
}

export default UpdateCourse;
