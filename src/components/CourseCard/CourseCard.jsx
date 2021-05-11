import React from "react";
import PropTypes from "prop-types";
import styles from "./CourseCard.module.css";

import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showCourse, deleteCourse } from "../../store/slices/courseSlice";

function CourseCard(props) {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2 className={styles.title}>{props.course.title}</h2>
        <p>{props.course.description}</p>
      </div>
      <div className={styles.info}>
        <div>
          <span className={styles.subtitle}>Authors: </span>
          <span className={styles.subinfo}>{props.author}</span>
        </div>
        <div>
          <span className={styles.subtitle}>Creation date: </span>
          <span className={styles.subinfo}>{props.course.creationDate}</span>
        </div>
        <div>
          <span className={styles.subtitle}>Duration: </span>
          <span className={styles.subinfo}>{props.course.duration} hours</span>
        </div>
        <div className={styles.button}>
          <Link to={`/courses/${props.course.title}`}>
            <Button
              text="Show course"
              onClick={() => dispatch(showCourse({ id: props.course.id }))}
            />
          </Link>
        </div>
        <div className={styles.button}>
          <Button
            text="Delete course"
            onClick={() => dispatch(deleteCourse({ id: props.course.id }))}
          />
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.object,
  author: PropTypes.string,
};

export default CourseCard;
