import PropTypes from "prop-types";

import CourseCard from "../CourseCard/CourseCard";

function Cards(props) {
  const filtered = props.filteredCourses.map((course) => (
    <CourseCard
      course={course}
      author={props.authors
        .filter((author) => course.authors.includes(author.id))
        .map((author) => author.name)
        .join(", ")}
    />
  ));

  return <>{filtered}</>;
}

Cards.propTypes = {
  filteredCourses: PropTypes.array,
};

export default Cards;
