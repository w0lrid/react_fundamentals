import Button from "../Button/Button";

function CourseCard(props) {
  return (
    <div className="row border border-success rounded mx-auto mb-3 p-3">
      <div className="col-8">
        <h2 className="fs-1 fw-bolder">{props.course.title}</h2>
        <p>{props.course.description}</p>
      </div>
      <div className="col-4">
        <span className="fs-5 fw-bolder">Authors: </span>
        <span className="fs-5">{props.author}</span>
        <br />
        <span className="fs-5 fw-bolder">Creation date: </span>
        <span className="fs-5">{props.course.creationDate}</span>
        <br />
        <span className="fs-5 fw-bolder">Duration: </span>
        <span className="fs-5">{props.course.duration} hours</span>
        <br />
        <br />
        <Button text="Show course" />
      </div>
    </div>
  );
}

export default CourseCard;
