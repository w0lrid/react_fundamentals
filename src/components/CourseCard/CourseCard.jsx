import React from "react";
import PropTypes from "prop-types";
import styles from "./CourseCard.module.css";
import { USER } from "../../constants";

import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../store/actions/courseActions";

function CourseCard(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2 data-testid="title" className={styles.title}>
          {props.course.title}
        </h2>
        <p data-testid="description">{props.course.description}</p>
      </div>
      <div className={styles.info}>
        <div>
          <span className={styles.subtitle}>Authors: </span>
          <span className={styles.subinfo}>{props.author}</span>
        </div>
        <div>
          <span className={styles.subtitle}>Creation date: </span>
          <span data-testid="date" className={styles.subinfo}>
            {props.course.creationDate}
          </span>
        </div>
        <div>
          <span className={styles.subtitle}>Duration: </span>
          <span data-testid="duration" className={styles.subinfo}>
            {props.course.duration} hours
          </span>
        </div>
        <div className={styles.button}>
          <Link
            to={{
              pathname: `/courses/${props.course.title}`,
              state: { id: props.course.id },
            }}
          >
            <Button text="Show course" />
          </Link>
        </div>
        {localStorage.getItem(USER.EMAIL) === USER.ADMIN.EMAIL &&
        localStorage.getItem(USER.TOKEN) ? (
          <div className={styles.button}>
            <Link
              to={{
                pathname: `/courses/update/${props.course.title}`,
                state: { id: props.course.id },
              }}
            >
              <Button text="Update course" />
            </Link>
            <Button
              text="Delete course"
              onClick={() => dispatch(deleteCourse({ id: props.course.id }))}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.object,
  author: PropTypes.string,
};

export default CourseCard;
