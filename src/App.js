import "./App.css";
import { useState } from "react";
import { STATE_OF_MAIN_CONTENT } from "./constants";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import NewCourseForm from "./components/NewCourseForm/NewCourseForm";

function App() {
  const [state] = useState(STATE_OF_MAIN_CONTENT.initialView);

  return (
    <div className="container border-top mt-2 mb-2 pt-4">
      <Header />
      <div className="container border border-primary rounded p-4">
        {state === STATE_OF_MAIN_CONTENT.initialView ? (
          <Content state={STATE_OF_MAIN_CONTENT.initialView} />
        ) : (
          <NewCourseForm state={STATE_OF_MAIN_CONTENT.createFormView} />
        )}
      </div>
    </div>
  );
}

export default App;
