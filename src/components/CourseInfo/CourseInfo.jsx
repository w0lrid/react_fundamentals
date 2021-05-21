import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Link, useLocation } from "react-router-dom";
import styles from "./CourseInfo.module.css";
import additionalStyles from "../CourseCard/CourseCard.module.css";
import axios from "axios";
import { ROUTES } from "../../constants";

function CourseInfo() {
  const [course, setCourse] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchData = async (id = location.state.id) => {
      const response = await axios.get(`http://localhost:3000/courses/${id}`);

      setCourse(response.data.result);
    };
    fetchData();
  }, []);

  let uuid = () => v4();

  return (
    <div key={uuid}>
      <Link to={ROUTES.COURSES}>
        <div className={styles.link}>&lt;&lt;&lt; back to courses</div>
      </Link>
      <div className={styles.title}>{course.title}</div>
      <div className={styles.container}>
        <div className={styles.description}>{course.description}</div>
        <div className={styles.info}>
          <div>
            <span className={additionalStyles.subtitle}>ID: </span>
            <span className={additionalStyles.subinfo}>{course.id}</span>
          </div>
          <div>
            <span className={additionalStyles.subtitle}>Duration: </span>
            <span className={additionalStyles.subinfo}>
              {course.duration} hours
            </span>
          </div>
          <div>
            <span className={additionalStyles.subtitle}>Created: </span>
            <span className={additionalStyles.subinfo}>
              {course.creationDate}
            </span>
          </div>
          <div>
            <span className={additionalStyles.subtitle}>Authors: </span>
            <span className={additionalStyles.subinfo}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
