import "./App.css";
import freeCodeCampLogo from "./images/logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [clickCounter, setClicksValue] = useState(0);

  const clickHandler = () => {
    setClicksValue(clickCounter + 1);
  };

  const restartCounter = () => {
    setClicksValue(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="freeCodeCamp logo"
        />
      </div>
      <div className="main-container">
        <Counter clicksCount={clickCounter} />
        <Button
          text="Click"
          isClickButton={true}
          clickHandler={clickHandler}
        ></Button>
        <Button
          text="Restart"
          isClickButton={false}
          clickHandler={restartCounter}
        ></Button>
      </div>
    </div>
  );
}

export default App;
