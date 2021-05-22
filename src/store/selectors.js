import { useSelector } from "react-redux";

export const useAuthor = () => {
  const authors = useSelector((state) => state.authorReducer.authors);
  return authors;
};

export const useAuthorStatus = () => {
  const status = useSelector((state) => state.authorReducer.status);
  return status;
};

export const useCourses = () => {
  const courses = useSelector((state) => state.courseReducer.courses);
  return courses;
};

export const useCoursesStatus = () => {
  const status = useSelector((state) => state.courseReducer.status);
  return status;
};

export const useCourse = () => {
  const course = useSelector((state) => state.courseReducer.course);
  return course;
};

export const useSuccessful = () => {
  const successful = useSelector((state) => state.userReducer.successful);
  return successful;
};

export const useUserName = () => {
  const name = useSelector((state) => state.userReducer.name);
  return name;
};

export const useUserIsAuth = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return isAuth;
};
