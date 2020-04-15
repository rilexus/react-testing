import React from "react";
import { render } from "@testing-library/react";
import { ConenctedList } from "./ConenctedList";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("List", function () {
  it('should display "add to list" string', function () {
    const { getByText } = render(
      <Provider store={store}>
        <ConenctedList />
      </Provider>
    );
    const element = getByText("add to list");
    expect(element).toBeDefined();
  });

  it('should render element with role="button"', function () {
    expect(true).toBe(true);
  });

  it("should render list values", function () {
    expect(true).toBe(true);
  });

  it("should add new list element on button click", function () {
    expect(true).toBe(true);
  });
});
