import CourseCard from "../CourseCard/CourseCard";

function Courses(props) {
  console.log(props.authors);
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

export default Courses;
