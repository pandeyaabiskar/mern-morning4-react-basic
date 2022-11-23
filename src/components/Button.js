import "./button.css";

function Button(props) {
  return (
    <button
      className={`btn ${props.className ? props.className : ""}`}
      onClick={props.clickHandler}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

export default Button;
