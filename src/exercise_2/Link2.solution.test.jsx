import React from "react";
import { render } from "@testing-library/react";
import Exercise1 from "./Link2";

describe("Exercise 1", function () {
  it("should be able to go to google", function () {
    const { getByText } = render(<Exercise1 />);
    expect(getByText("to google").getAttribute("href").includes("google")).toBe(
      true
    );
  });
});
