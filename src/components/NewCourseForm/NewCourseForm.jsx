import { useState } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Content from "../Content/Content";

function NewCourseForm(props) {
  const [state, setState] = useState(props.state);
  const [courseName, setCourseName] = useState("");

  function handleChange(event) {
    setCourseName(event.target.previousElementSibling.value);
  }

  return (
    <>
      {state === "create-form" ? (
        <>
          <h3>Title</h3>
          <div className="col input-group">
            <Input placeholder="Enter course name" />
            <Button text="Create course" onClick={() => setState("start")} />
          </div>
          <br />
          <h3>Description</h3>
          <Input placeholder="Enter description" />
        </>
      ) : (
        <>
          <Content state="start" />
        </>
      )}
    </>
  );
}

export default NewCourseForm;
