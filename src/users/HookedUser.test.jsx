import HookedUser from "./HookedUser";
import { render, wait } from "@testing-library/react";
import React from "react";

jest.mock("../hooks/useFetchUsers/useFetchUsers", () => {
  return {
    useFetchUsers: () => [{ id: "id", first_name: "Stan" }],
  };
});

describe("HookedUser", function () {
  it("should render users", async function () {
    const { getByText } = render(<HookedUser />);

    expect(getByText("Stan")).toBeDefined();
  });
});
