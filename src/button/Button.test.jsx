import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { TESTING_IDS } from "./Button";

describe("Button", function () {
  it("should render children", function () {
    // 1. arrange
    const text = "click";

    // 2. render
    // https://testing-library.com/docs/react-testing-library/cheatsheet
    const { getByText } = render(<Button>{text}</Button>);

    // 3. find a thing you want to test (element)
    const elem = getByText(text);

    // 4. test
    expect(elem).toBeDefined();
  });

  it('should have a role="button" on it', function () {
    // arrange

    // render
    const { getByRole } = render(<Button />);

    const element = getByRole("button");

    //test
    expect(element).toBeDefined();
  });

  it("should call onClick handler", function () {
    // arrange
    const callback = jest.fn();

    // render
    const { getByTestId } = render(<Button onClick={callback} />);

    const button = getByTestId(TESTING_IDS.button);

    fireEvent.click(button);

    //test

    expect(callback).toBeCalled();
  });
});
