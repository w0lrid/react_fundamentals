import React from "react";
import { Link } from "react-router-dom";
import Data from "../../data.json";
import styles from "./CourseInfo.module.css";
import additionalStyles from "../CourseCard/CourseCard.module.css";

function CourseInfo(props) {
  const courseAsArray = Data.mockedCourseList.filter((item) =>
    item.title.includes(props.match.params.title)
  );

  function duplicateDescription(description) {
    let result = description;
    for (let i = 0; i < 3; i++) {
      result += description;
    }
    return result;
  }

  const course = courseAsArray.map((item) => (
    <>
      <Link to="/courses">
        <div className={styles.link}>&lt;&lt;&lt; back to courses</div>
      </Link>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.container}>
        <div className={styles.description}>
          {duplicateDescription(item.description)}
        </div>
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
  ));
  return <>{course}</>;
}

export default CourseInfo;
