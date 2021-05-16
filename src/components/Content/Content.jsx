import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Content.module.css";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Cards from "../Cards/Cards";
import { getCourses } from "../../store/actions/courseActions";

function Content() {
  const history = useHistory();
  const courses = useSelector((state) => state.courseReducer.courses);
  const status = useSelector((state) => state.courseReducer.status);
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
        {localStorage.getItem("Email") === "admin@email.com" &&
        localStorage.getItem("Token") ? (
          <Button
            text="Add new course"
            onClick={() => history.push("/courses/add")}
          />
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
