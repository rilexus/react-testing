import React, { useState } from "react";
import { fireEvent, render } from "@testing-library/react";
import Input from "./input";

describe("Input", function () {
  const setup = () => {
    const id = "id";
    const name = "name";
    const label = "label";
    const testId = "testId";
    const initValue = "value";

    const Inp = () => {
      const [v, setS] = useState(() => initValue);
      const handle = (e) => {
        const {
          target: { value },
        } = e;
        setS(value);
      };
      return (
        <Input
          name={name}
          testId={testId}
          label={label}
          id={id}
          onChange={handle}
          value={v}
        />
      );
    };

    const units = render(<Inp />);

    // get the element see: https://testing-library.com/docs/react-testing-library/cheatsheet#queries
    const input = units.getByTestId(testId);
    return { input, id, name, testId, initValue, ...units };
  };

  it("should react to onChange events", function () {
    // 1. arrange && render
    const { input } = setup();
    // 2. act
    fireEvent.change(input, { target: { value: "change value" } });
    // test
    expect(input.value).toBe("change value");
  });

  it("should attach passed", function () {
    const { input, id, name, testId } = setup();

    const idOninput = input.getAttribute("id");
    const nameOnInput = input.getAttribute("name");
    const dataTestId = input.getAttribute("data-testid");

    expect(idOninput).toBe(id);
    expect(nameOnInput).toBe(name);
    expect(dataTestId).toBe(testId);
  });
});
