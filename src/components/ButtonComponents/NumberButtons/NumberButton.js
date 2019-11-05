import React from "react";

const NumberButton = (props) => {
  return (
      <button onClick={() => props.aaa(props.number)}>{props.number}</button>
  );
};

export {NumberButton};
