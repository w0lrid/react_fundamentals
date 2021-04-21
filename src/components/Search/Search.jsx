import React from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

function Search(props) {
  return (
    <>
      <Input value={props.value} placeholder="Enter course name..." />
      <Button onClick={props.onChange} text="Search" />
    </>
  );
}

export default Search;
