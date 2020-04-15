import React from "react";

export const TESTING_IDS = {
  button: "button",
};

const Button = ({ onClick, children, testId }) => (
  <button
    className={"awesome-button"}
    onClick={onClick}
    data-testid={TESTING_IDS.button}
  >
    {children}
  </button>
);

export default Button;
