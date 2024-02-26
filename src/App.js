import React, { useRef } from "react";
import FancyInput from "./components/useImperativeHandle/FancyInput";
import "./App.css";

function App() {
  const date = new Date();

  const fancyInputRef = useRef();

  const focusInput = (val) => {
    fancyInputRef.current.focus(val);
    fancyInputRef.current.countMax();
  };

  return (
    <div className="App">
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => focusInput(date.getDay())}>Cliquer</button>
    </div>
  );
}

export default App;
