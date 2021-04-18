import { useState } from "react";

import Search from "../Search/Search";
import Button from "../Button/Button";
import Cards from "../Cards/Cards";
import Data from "../../data.json";
import NewCourseForm from "../NewCourseForm/NewCourseForm";

function Content(props) {
  const [state, setState] = useState(props.state);
  const [courseName, setCourseName] = useState("");

  const filteredCourses = Data.mockedCourseList.filter((course) =>
    course.title.toLowerCase().includes(courseName.toLowerCase())
  );

  function handleChangeForButton(event) {
    setCourseName(event.target.previousElementSibling.value);
  }

  return (
    <>
      {state === "start" ? (
        <>
          <div className="row mb-3">
            <div className="col input-group">
              <Search data={Data} onChange={handleChangeForButton} />
            </div>
            <div className="col-2 offset-md-3">
              <Button
                text="Add new course"
                onClick={() => setState("create-form")}
              />
            </div>
          </div>
          <div className="row mx-auto">
            <Cards
              filteredCourses={filteredCourses}
              authors={Data.mockedAuthorsList}
            />
          </div>
        </>
      ) : (
        <>
          <NewCourseForm state="create-form" />
        </>
      )}
    </>
  );
}

export default Content;
