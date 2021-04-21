import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";

function CourseCard(props) {
  return (
    <div className="row border border-success rounded mx-auto mb-3 p-3">
      <div className="col-8">
        <h2 className="fs-1 fw-bolder">{props.course.title}</h2>
        <p>{props.course.description}</p>
      </div>
      <div className="col-4">
        <div>
          <span className="fs-5 fw-bolder">Authors: </span>
          <span className="fs-5">{props.author}</span>
        </div>
        <div>
          <span className="fs-5 fw-bolder">Creation date: </span>
          <span className="fs-5">{props.course.creationDate}</span>
        </div>
        <div>
          <span className="fs-5 fw-bolder">Duration: </span>
          <span className="fs-5">{(props.course.duration = 2)} hours</span>
        </div>
        <div className="mt-4">
          <Button text="Show course" />
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
