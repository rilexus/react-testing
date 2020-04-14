import React, { useState } from "react";
import Input from "./input";

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (changeEvent) => {
    const {
      target: { value },
    } = changeEvent;
    setInputValue(value);
  };

  return (
    <div>
      <Input
        name={"firstInput"}
        value={inputValue}
        onChange={handleChange}
        id={"firstInput"}
        label={"input"}
        testId={"firstInput"}
      />
    </div>
  );
};

export default ControlledInput;
