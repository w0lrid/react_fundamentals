import React from "react";
import * as redux from "react-redux";
import "@testing-library/react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CourseCard from "../components/CourseCard/CourseCard";
import Cards from "../components/Cards/Cards";
import Header from "../components/Header/Header";
import NewCourseForm from "../components/NewCourseForm/NewCourseForm";
import { container } from "webpack";

const mockedCourse = {
  id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
  title: "JavaScript",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  creationDate: "8/3/2021",
  duration: 160,
  authors: [
    "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
    "f762978b-61eb-4096-812b-ebde22838167",
  ],
};

const initialState = {
  courses: [],
  status: false,
};
const mockStore = configureStore();
let store = mockStore(initialState);

describe("CourseCard", () => {
  it("renders with a title", () => {
    render(
      <Provider store={store}>
        <CourseCard course={mockedCourse} />
      </Provider>
    );
    expect(screen.getByTestId("title").textContent).toBe("JavaScript");
  });

  it("renders with a description", () => {
    render(
      <Provider store={store}>
        <CourseCard course={mockedCourse} />
      </Provider>
    );
    expect(screen.getByTestId("description").textContent).toBe(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    );
  });

  it("renders with a piped duration", () => {
    render(
      <Provider store={store}>
        <CourseCard course={mockedCourse} />
      </Provider>
    );
    expect(screen.getByTestId("duration").textContent).toBe("160 hours");
  });

  it("renders with a date", () => {
    render(
      <Provider store={store}>
        <CourseCard course={mockedCourse} />
      </Provider>
    );
    expect(screen.getByTestId("date").textContent).toBe("8/3/2021");
  });
});

describe("Courses", () => {
  const useSelectorMock = jest.spyOn(redux, "useSelector");

  it("displays amount of CourseCard equal lenght of courses array", () => {
    const mockedCourses = [
      {
        id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
        title: "JavaScript",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        creationDate: "8/3/2021",
        duration: 160,
        authors: [
          "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
          "f762978b-61eb-4096-812b-ebde22838167",
        ],
      },
      {
        id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
        title: "JavaScript",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        creationDate: "8/3/2021",
        duration: 160,
        authors: [
          "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
          "f762978b-61eb-4096-812b-ebde22838167",
        ],
      },
    ];
    useSelectorMock.mockReturnValue([
      { name: "lotar", id: "855ef24a-1000-4344-afec-a3f6b621c357" },
      { name: "thrall", id: "2b90631b-7ce6-48ed-bf7c-4fda04c3" },
    ]);

    const { getByTestId } = render(
      <Provider store={store}>
        <Cards courses={mockedCourses} />
      </Provider>
    );

    const courses = getByTestId("cards");

    expect(courses.children.length).toEqual(2);
  });

  it("displays nothing if courses array is empty", () => {
    const mockedCourses = [];
    useSelectorMock.mockReturnValue([
      { name: "lotar", id: "855ef24a-1000-4344-afec-a3f6b621c357" },
      { name: "thrall", id: "2b90631b-7ce6-48ed-bf7c-4fda04c3" },
    ]);
    const { getByTestId } = render(
      <Provider store={store}>
        <Cards courses={mockedCourses} />
      </Provider>
    );

    const courses = getByTestId("cards");

    expect(courses.children.length).toEqual(0);
  });
});

describe("Header", () => {
  it("renders logo", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("renders button", () => {
    const useSelectorMock = jest.spyOn(redux, "useSelector");
    useSelectorMock.mockReturnValue("Anduin");

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByText("Anduin")).toBeInTheDocument();
  });
});

describe("CreateCourse", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
  const useSelectorMock = jest.spyOn(redux, "useSelector");

  it("render authors list", () => {
    useSelectorMock.mockReturnValue([
      { name: "lotar", id: "855ef24a-1000-4344-afec-a3f6b621c357" },
      { name: "thrall", id: "2b90631b-7ce6-48ed-bf7c-4fda04c3" },
    ]);

    render(
      <Provider store={store}>
        <NewCourseForm />
      </Provider>
    );

    expect(screen.getAllByTestId("authors").length).toEqual(2);
  });

  it("adds author to the common authors list", () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue([
      { name: "lotar", id: "855ef24a-1000-4344-afec-a3f6b621c357" },
      { name: "thrall", id: "2b90631b-7ce6-48ed-bf7c-4fda04c3" },
    ]);
    render(<NewCourseForm />);
    fireEvent.click(
      screen.getByText("Create author"),
      render(<div>new author</div>)
    );
  });
});
