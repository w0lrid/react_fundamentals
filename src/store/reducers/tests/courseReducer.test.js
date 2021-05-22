import { types } from "@babel/core";
import reducer from "../courseReducer";

describe("course reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, [])).toEqual({
      course: {},
      courses: [],
      status: false,
    });
  });
  it("should handle ADD_COURSE", () => {
    expect(
      reducer([], { type: types.ADD_COURSE, text: "run the tests" })
    ).toEqual([]);
  });
});
