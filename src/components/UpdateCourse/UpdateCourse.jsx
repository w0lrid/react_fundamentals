import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

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
          data.duration === course.duration ? course.duration : data.duration,
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
        id: authorId,
        name: data.name,
      })
    );
  };
  const addAuthor = (author) => {
    setCourseAuthors([...courseAuthors, author]);
  };
  const authorId = (Math.random() / 100).toString();

  function searchAuthor(course) {
    return authors
      .filter((author) => course.authors.includes(author.id))
      .map((author) => <div>{author.name}</div>);
  }

  return (
    <>
      <form onSubmit={handleSubmit(update)}>
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
        <Button type="submit" text="update" />
      </form>
      <form onSubmit={handleSubmit2(createNewAuthor)}>
        <InputForm label="name" register={register2} />
        <Button type="submit" text="Create author" />
      </form>
      <InputForm
        label="duration"
        placeholder={course.duration}
        register={register}
        required
      />
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
    </>
  );
}

export default UpdateCourse;
