import "./App.css";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

import NewCourseForm from "./components/NewCourseForm/NewCourseForm";
import { useState } from "react";

function App() {
  const [state] = useState("start");

  return (
    <div className="container border-top mt-2 mb-2 pt-4">
      <Header />
      <div className="container border border-primary rounded p-4">
        {state === "start" ? (
          <Content state="start" />
        ) : (
          <NewCourseForm state="create-form" />
        )}
      </div>
    </div>
  );
}

export default App;
