import { useSelector } from "react-redux";

export const useAuthor = () => {
  const authors = useSelector((state) => state.authorReducer.authors);
  return authors;
};

export const useAuthorStatus = () => {
  const status = useSelector((state) => state.authorReducer.status);
  return status;
};

export const useCourse = () => {
  const courses = useSelector((state) => state.courseReducer.courses);
  return courses;
};

export const useCourseStatus = () => {
  const status = useSelector((state) => state.courseReducer.status);
  return status;
};

export const useUserName = () => {
  const name = useSelector((state) => state.userReducer.name);
  return name;
};

export const useUserIsAuth = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return isAuth;
};
