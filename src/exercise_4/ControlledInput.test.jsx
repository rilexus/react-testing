import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ControlledInput from "./ControlledInput";

describe("ControlledInput Component", () => {
  it("should handle change event", function () {
    const { getByLabelText, getByTestId, rerender } = render(
      <ControlledInput />
    );

    const input = getByTestId("firstInput");

    fireEvent.change(input, { target: { value: "some" } });

    expect(input.value).toEqual("some");
  });
});
