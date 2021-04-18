function Input(props) {
  return (
    <>
      <input
        className={
          props.className ? `form-control ${props.className}` : "form-control"
        }
        type="search"
        placeholder={props.placeholder}
      />
    </>
  );
}

export default Input;
