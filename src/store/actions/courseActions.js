import axios from "axios";
import {
  addCourse,
  delCourse,
  setCourses,
  updCourse,
} from "../reducers/courseReducer";
import { USER } from "../../constants";

const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem(USER.TOKEN),
};

export const getCourses = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:3000/courses/all")
      .then((response) => dispatch(setCourses(response.data)));
  };
};

export const sendCourse = (course) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3000/courses/add", course, {
        headers: headers,
      })
      .then((response) => dispatch(addCourse(response.data)));
  };
};

export const updateCourse = (course) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3000/courses/${course.id}`, course, {
        headers: headers,
      })
      .then((response) => dispatch(updCourse(response.data)));
  };
};

export const deleteCourse = (course) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/courses/${course.id}`, {
      headers: headers,
    });
    dispatch(delCourse(course));
  };
};
