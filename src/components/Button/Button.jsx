function Button(props) {
  return (
    <button type="button" className="btn border-info" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
