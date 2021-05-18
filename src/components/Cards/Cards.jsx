import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import CourseCard from "../CourseCard/CourseCard";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { getAuthors } from "../../store/actions/authorActions";

function Cards({ courses }) {
  const authors = useSelector((state) => state.authorReducer.authors);
  const status = useSelector((state) => state.authorReducer.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === false) dispatch(getAuthors());
  });

  function searchAuthor(course) {
    return authors
      .filter((author) => course.authors.includes(author.id))
      .map((author) => author.name)
      .join(", ");
  }

  return (
    <div data-testid="cards">
      {courses.map((course) => {
        return (
          <CourseCard
            data-testid="card"
            key={v4()}
            course={course}
            author={searchAuthor(course)}
          />
        );
      })}
    </div>
  );
}

Cards.propTypes = {
  filteredCourses: PropTypes.array,
};

export default Cards;
