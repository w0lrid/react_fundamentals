import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import CourseCard from "../CourseCard/CourseCard";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { getAuthors } from "../../store/slices/authorSlice";

function Cards({ courses }) {
  const authors = useSelector((state) => state.authorReducer.authors);
  const status = useSelector((state) => state.authorReducer.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") dispatch(getAuthors());
  });

  function searchAuthor(course) {
    return authors
      .filter((author) => course.authors.includes(author.id))
      .map((author) => author.name)
      .join(", ");
  }

  return (
    <>
      {courses.map((course) => {
        return (
          <CourseCard
            key={v4()}
            course={course}
            author={searchAuthor(course)}
          />
        );
      })}
    </>
  );
}

Cards.propTypes = {
  filteredCourses: PropTypes.array,
};

export default Cards;
