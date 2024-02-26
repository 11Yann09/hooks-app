import React, { useRef } from "react";

function Title() {
  console.log("composant titre chargé");

  const h1renders = useRef(0);
  console.log(h1renders);

  setInterval(() => {
    h1renders.current++;
    console.log(h1renders.current);
  }, 1000);

  return (
    <div>
      <p>{h1renders.current}</p>
    </div>
  );
}

export default Title;
