import React, { useRef, useState, useEffect } from "react";

function Input() {
  const [count, setCount] = useState(0);

  const setIntervalRef = useRef();

  useEffect(() => {
    setIntervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 1000);
  }, []);

  const stopIncrement = () => {
    clearInterval(setIntervalRef.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={stopIncrement}>Stop !</button>
    </div>
  );
}

export default Input;
