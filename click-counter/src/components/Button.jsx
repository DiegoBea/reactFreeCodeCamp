import React from "react";
import '../stylesheets/Button.css'

function Button({ text, isClickButton, clickHandler }) {
  return (
    <button
      className={isClickButton ? "click-button" : "restart-button"}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;
