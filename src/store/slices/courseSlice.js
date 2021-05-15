/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { status: "idle", error: null, courses: [], course: [] }; */

/* export const getCourses = createAsyncThunk("course/getCourses", () =>
  axios
    .get("http://localhost:3000/courses/all")
    .then((response) => response.data.result)
);
 */
/* const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("Token"),
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: { */
/* addCourse(state, action) {
      axios
        .post("http://localhost:3000/courses/add", action.payload, {
          headers: headers,
        })
        .then((response) => console.log(response));
      state.courses = state.courses.concat(action.payload);
    }, */
/* updateCourse(state, action) {
      axios.put(
        `http://localhost:3000/courses/${action.payload.id}`,
        action.payload,
        { headers: headers }
      );
      const index = state.courses.findIndex(
        (course) => course.id === action.payload.id
      );
      state.courses.splice(index, 1, action.payload);
    }, */
/*     choose(state, action) {
      state.course.push(
        state.courses.find((course) => course.id === action.payload.id)
      );
    }, */
/* deleteCourse(state, action) {
      axios.delete(`http://localhost:3000/courses/${action.payload.id}`, {
        headers: headers,
      });
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload.id
      );
    }, */
/* clear(state) {
      state.course = [];
    },
  }, */
/*   extraReducers: {
    [getCourses.pending]: (state) => {
      state.status = "loading";
    },
    [getCourses.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.courses = state.courses.concat(action.payload);
    },
    [getCourses.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
 */
/* });

export const { addCourse, updateCourse, choose, deleteCourse, clear } =
  courseSlice.actions;

export default courseSlice.reducer; */
