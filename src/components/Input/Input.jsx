import PropTypes from "prop-types";

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

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
