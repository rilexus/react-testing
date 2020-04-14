import { fireEvent, render, wait } from "@testing-library/react";
import React from "react";
import Users from "./Users";

jest.mock("../api/api", () => {
  return {
    fetchUser: jest.fn(async () => {
      return [
        {
          id: "userid",
          first_name: "Stan",
        },
      ];
    }),
  };
});

describe("Users", function () {
  it("should display fetched users", async function () {
    const { getByText } = render(<Users />);

    const button = getByText("fetch users");
    fireEvent.click(button);

    await wait();

    const listElem = getByText("Stan");
    expect(listElem).toBeDefined();
  });
});
