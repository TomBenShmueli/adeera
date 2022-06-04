import React from 'react';
import "./Button.css";

const Button = (props) => {
  return (
    <button className={props.className}>{props.display}</button>

  )
}

export default Button