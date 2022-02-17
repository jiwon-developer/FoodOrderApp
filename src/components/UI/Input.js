import classes from "./Input.module.css";
import React from "react";

//ref를 받는 component에서는 React.fowaardRef
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
