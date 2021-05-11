import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { status: "idle", error: null, courses: [] };

export const getCourses = createAsyncThunk("course/getCourses", () =>
  axios
    .get("http://localhost:3000/courses/all")
    .then((response) => response.data.result)
);

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse(state, action) {
      state.courses = state.courses.concat(action.payload);
    },
    showCourse(state, action) {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload.id
      );
    },
    deleteCourse(state, action) {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload.id
      );
    },
  },
  extraReducers: {
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
});

export const { addCourse, showCourse, deleteCourse } = courseSlice.actions;

export default courseSlice.reducer;
