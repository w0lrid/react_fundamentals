import React, { useState } from "react";
import PropTypes from "prop-types";

import { STATE_OF_MAIN_CONTENT } from "../../constants";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Content from "../Content/Content";

function NewCourseForm(props) {
  const [state, setState] = useState(props.state);

  return (
    <>
      {state === STATE_OF_MAIN_CONTENT.createFormView ? (
        <>
          <div className="mb-3">
            <h3>Title</h3>
            <div className="col input-group">
              <Input placeholder="Enter course name" />
              <Button
                text="Create course"
                onClick={() => setState(STATE_OF_MAIN_CONTENT.initialView)}
              />
            </div>
          </div>
          <div>
            <h3>Description</h3>
            <Input placeholder="Enter description" />
          </div>
        </>
      ) : (
        <>
          <Content state={STATE_OF_MAIN_CONTENT.initialView} />
        </>
      )}
    </>
  );
}

NewCourseForm.propTypes = {
  state: PropTypes.string,
};

export default NewCourseForm;
