import React from "react";
import "../stylesheets/Counter.css";

function Counter({ clicksCount }) {
  return <div className="counter">{clicksCount}</div>;
}

export default Counter;
