import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styles from "./Content.module.css";
import { USER } from "../../constants";
import { useCourse, useCourseStatus } from "../../store/selectors";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Cards from "../Cards/Cards";
import { getCourses } from "../../store/actions/courseActions";

function Content() {
  const courses = useCourse();
  const status = useCourseStatus();
  const [courseName, setCourseName] = useState("");
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(courseName.toLowerCase())
  );

  function handleChangeForButton(event) {
    setCourseName(event.target.previousElementSibling.value);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === false) dispatch(getCourses());
  }, []);

  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <Input placeholder="Enter course name..." />
          <Button onClick={handleChangeForButton} text="Search" />
        </div>
        {localStorage.getItem(USER.EMAIL) === USER.ADMIN.EMAIL &&
        localStorage.getItem(USER.TOKEN) ? (
          <Link to="/courses/add">
            <Button text="Add new course" />
          </Link>
        ) : (
          ""
        )}
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
