import React from "react";

const Button = props => {
  return (
    <input
      type="button"
      onClick={props.handleClick}
      value={props.label}
      className="ui primary button"
    />
  );
};

export default Button;
