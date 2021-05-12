import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import styles from "./Main.module.css";

import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Content from "../Content/Content";
import CourseInfo from "../CourseInfo/CourseInfo";
import NewCourseForm from "../NewCourseForm/NewCourseForm";
import UpdateCourse from "../UpdateCourse/UpdateCourse";

function Main() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/courses" component={Content} />
        <Route exact path="/courses/add" component={NewCourseForm} />
        <Route path="/courses/update/:title" component={UpdateCourse} />
        <Route path="/courses/:title" component={CourseInfo} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login" />;
            }}
          />
        </Switch>
      </Switch>
    </div>
  );
}

export default Main;
