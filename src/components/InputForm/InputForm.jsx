import React from "react";

function InputForm({ placeholder, label, register, required }) {
  return (
    <>
      <label>{label}</label>
      <input defaultValue={placeholder} {...register(label, { required })} />
    </>
  );
}

export default InputForm;
