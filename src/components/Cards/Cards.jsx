import React from "react";
import PropTypes from "prop-types";

import CourseCard from "../CourseCard/CourseCard";

function Cards(props) {
  function searchAuthor(course) {
    return props.authors
      .filter((author) => course.authors.includes(author.id))
      .map((author) => author.name)
      .join(", ");
  }

  const filtered = props.filteredCourses.map((course) => (
    <CourseCard course={course} author={searchAuthor(course)} />
  ));

  return <>{filtered}</>;
}

Cards.propTypes = {
  filteredCourses: PropTypes.array,
};

export default Cards;
