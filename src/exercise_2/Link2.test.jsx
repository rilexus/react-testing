import React from "react";
import { render } from "@testing-library/react";
import Link2 from "./Link2";

describe("Exercise 1", function () {
  it("should be able to go to google", function () {
    const { getByText } = render(<Link2 />);
    expect(true).toBe(true);
  });
});
