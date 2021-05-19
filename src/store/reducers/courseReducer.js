const SET_COURSES = "SET_COURSES";
const ADD_COURSE = "ADD_COURSE";
const UPD_COURSE = "UPD_COURSE";
const DEL_COURSE = "DEL_COURSE";

const initialState = {
  courses: [],
  status: false,
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload.result,
        status: action.payload.successful,
      };

    case ADD_COURSE:
      return { ...state, courses: state.courses.concat(action.payload.result) };
    case UPD_COURSE:
      return {
        ...state,
        courses: state.courses.map((course) => {
          if (course.id !== action.payload.result.id) {
            return course;
          }
          return {
            ...course,
            ...action.payload.result,
          };
        }),
      };
    case DEL_COURSE:
      return {
        ...state,
        courses: state.courses.filter(
          (course) => course.id !== action.payload.id
        ),
        status: action.payload.successful,
      };
    default:
      return state;
  }
}

export const setCourses = (response) => ({
  type: SET_COURSES,
  payload: response,
});

export const addCourse = (response) => ({
  type: ADD_COURSE,
  payload: response,
});

export const updCourse = (response) => ({
  type: UPD_COURSE,
  payload: response,
});

export const delCourse = (response) => ({
  type: DEL_COURSE,
  payload: response,
});
