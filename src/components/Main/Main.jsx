import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { USER } from "../../constants";
import { ROUTES } from "../../constants";

import styles from "./Main.module.css";

import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Content from "../Content/Content";
import CourseInfo from "../CourseInfo/CourseInfo";
import NewCourseForm from "../NewCourseForm/NewCourseForm";
import UpdateCourse from "../UpdateCourse/UpdateCourse";

function Main() {
  const history = useHistory();
  const isLogged = !!(
    localStorage.getItem(USER.TOKEN) && localStorage.getItem(USER.EMAIL)
  );
  if (!isLogged) history.push(ROUTES.LOGIN);
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.REGISTRATION} component={Registration} />
        <Route exact path={ROUTES.COURSES} component={Content} />
        <Route exact path={ROUTES.NEW_COURSE} component={NewCourseForm} />
        <Route path={ROUTES.UPD_COURSE} component={UpdateCourse} />
        <Route path={ROUTES.TARGET_COURSE} component={CourseInfo} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to={ROUTES.LOGIN} />;
            }}
          />
        </Switch>
      </Switch>
    </div>
  );
}

export default Main;
