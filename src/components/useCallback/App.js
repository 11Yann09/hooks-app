import React, { useState, useCallback } from "react";
import Count from "./components/useCallback/Count";
import Button from "./components/useCallback/Button";
import "./App.css";

function App() {
  const [countOne, setCountOne] = useState({
    value: 0,
    btnColor: "success",
    increment: 25,
  });

  const [countTwo, setCountTwo] = useState({
    value: 0,
    btnColor: "danger",
    increment: 20,
  });

  const incrementCountOne = useCallback(
    (val) => {
      console.log("je suis dans incrementCountOne");
      countOne.value < 100 &&
        setCountOne({ ...countOne, value: countOne.value + val });
    },
    [countOne]
  );

  const incrementCountTwo = useCallback(
    (val) => {
      console.log("je suis dans incrementCountTwo");
      countTwo.value < 100 &&
        setCountTwo({ ...countTwo, value: countTwo.value + val });
    },
    [countTwo]
  );

  return (
    <div className="text-center">
      <Count
        text="CountOne"
        count={countOne.value}
        bgColor={countOne.btnColor}
      />
      <Count
        text="CountTwo"
        count={countTwo.value}
        bgColor={countTwo.btnColor}
      />

      <Button
        handleClick={incrementCountOne}
        btnColor={countOne.btnColor}
        increment={countOne.increment}
      >
        Count 1
      </Button>
      <Button
        handleClick={incrementCountTwo}
        btnColor={countTwo.btnColor}
        increment={countTwo.increment}
      >
        Count 2
      </Button>
    </div>
  );
}

export default App;