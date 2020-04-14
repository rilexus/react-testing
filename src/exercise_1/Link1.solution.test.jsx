import React from "react";
import { render } from "@testing-library/react";
import Exercise1 from "./Link1";

describe("Exercise 2", function () {
  it("should be able to go to google", function () {
    const { getByText } = render(<Exercise1 />);

    expect(
      Array.from(document.getElementsByTagName("a")).some((a) =>
        a.getAttribute("href").includes("google")
      )
    ).toBe(true);
  });
});
