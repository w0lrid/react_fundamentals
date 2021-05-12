import { useSelector } from "react-redux";
import { v4 } from "uuid";
import CourseCard from "../CourseCard/CourseCard";
import PropTypes from "prop-types";
import React from "react";

function Cards({ courses }) {
  // const courses = useSelector((state) => state.courseReducer.courses);
  const authors = useSelector((state) => state.authorReducer.authors);

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
