import React from "react";

function InputForm({ label, register, required }) {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
}

export default InputForm;
