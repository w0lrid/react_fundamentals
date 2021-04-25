import React, { useState } from "react";

import Input from "../Input/Input";

const fields = ["Name", "Email", "Password"];
const [name, email, password] = fields.map((field) => (
  <>
    <div>{field}</div>
    <Input placeholder={`Enter ${field}`} />
  </>
));

function renderSwitch(param) {
  switch (param) {
    case "login":
      return [email, password];
    case "registration":
      return [name, email, password];
    default:
      return <div>Incorrect path</div>;
  }
}
function UserForm(props) {
  const [state] = useState(props.name);
  return renderSwitch(state);
}

export default UserForm;
