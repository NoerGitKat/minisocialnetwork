import React from "react";
import spinner from "./../common/spinner.gif";

const Spinner = () => {
  return (
    <img
      style={{ width: "200px", margin: "auto", display: "block" }}
      src={spinner}
      alt="Loading..."
    />
  );
};

export default Spinner;
