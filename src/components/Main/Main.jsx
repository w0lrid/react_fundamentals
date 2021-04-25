import React from "react";
import { Switch, Route } from "react-router-dom";

import styles from "./Main.module.css";

import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Content from "../Content/Content";
import CourseInfo from "../CourseInfo/CourseInfo";
import NewCourseForm from "../NewCourseForm/NewCourseForm";

function Main() {
  console.log(styles);
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/courses" component={Content} />
        <Route path="/courses/add" component={NewCourseForm} />
        <Route path="/courses/:title" component={CourseInfo} />
      </Switch>
    </div>
  );
}

export default Main;
