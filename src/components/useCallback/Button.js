import React from "react";

function Button({ handleClick, btnColor, increment, children }) {
  console.log(`Button ${children}`);

  return (
    <div>
      <button
        onClick={() => handleClick(increment)}
        className={`btn btn-${btnColor} mt-3`}
      >
        + {increment} %
      </button>
    </div>
  );
}

export default React.memo(Button);
