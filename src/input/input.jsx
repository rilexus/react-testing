import React from "react";

const Input = ({ onChange, value, name, id, label, testId }) => {
  return (
    <label htmlFor={id}>
      <div>{label}</div>
      <input
        type="text"
        id={id}
        onChange={onChange}
        name={name}
        data-testid={testId}
        value={value}
      />
    </label>
  );
};

export default Input;
