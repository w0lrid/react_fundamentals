import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Cards from "../Cards/Cards";
import { useSelector } from "react-redux";

function Content(props) {
  const courses = useSelector((state) => state.courseReducer.courses);
  const [courseName, setCourseName] = useState("");
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(courseName.toLowerCase())
  );

  function handleChangeForButton(event) {
    setCourseName(event.target.previousElementSibling.value);
  }

  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <Input placeholder="Enter course name..." />
          <Button onClick={handleChangeForButton} text="Search" />
        </div>
        <Link to="/courses/add">
          <Button text="Add new course" />
        </Link>
      </div>
      <div className={styles.cardsContainer}>
        <Cards courses={filteredCourses} />
      </div>
    </>
  );
}

Content.propTypes = {
  state: PropTypes.string,
};

export default Content;
