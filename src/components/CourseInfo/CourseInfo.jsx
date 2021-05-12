import React from "react";
import { Link } from "react-router-dom";
import Data from "../../data.json";
import styles from "./CourseInfo.module.css";
import additionalStyles from "../CourseCard/CourseCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../store/slices/courseSlice";

function CourseInfo(props) {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseReducer.course).map(
    (item) => (
      <>
        <Link to="/courses">
          <div className={styles.link} onClick={() => dispatch(clear())}>
            &lt;&lt;&lt; back to courses
          </div>
        </Link>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.container}>
          <div className={styles.description}>{item.description}</div>
          <div className={styles.info}>
            <div>
              <span className={additionalStyles.subtitle}>ID: </span>
              <span className={additionalStyles.subinfo}>{item.id}</span>
            </div>
            <div>
              <span className={additionalStyles.subtitle}>Duration: </span>
              <span className={additionalStyles.subinfo}>
                {item.duration} hours
              </span>
            </div>
            <div>
              <span className={additionalStyles.subtitle}>Created: </span>
              <span className={additionalStyles.subinfo}>
                {item.creationDate}
              </span>
            </div>
            <div>
              <span className={additionalStyles.subtitle}>Authors: </span>
              <span className={additionalStyles.subinfo}>
                {Data.mockedAuthorsList
                  .filter((author) => item.authors.includes(author.id))
                  .map((author) => author.name)
                  .join(", ")}
              </span>
            </div>
          </div>
        </div>
      </>
    )
  );
  return <>{course}</>;
}

export default CourseInfo;
