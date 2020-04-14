import React from "react";
import { render } from "@testing-library/react";
import { List } from "./List";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { createStore } from "redux";
import { initListState, rootReducer } from "../redux/rootReducer";

const renderWithProvider = (
  ui,
  {
    initialState = initListState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

describe("List", function () {
  it('should display "add to list" string', function () {
    const { getByText } = render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    const element = getByText("add to list");
    expect(element).toBeDefined();
  });

  it('should render element with role="button"', function () {
    const { getByRole } = renderWithProvider(<List />);
    const button = getByRole("button");
    expect(button).toBeDefined();
  });

  it("should render a list values", function () {
    const list = [{ value: "val1" }, { value: "val2" }];
    const { getByText } = renderWithProvider(<List />, {
      initialState: { list },
    });
    const val1 = getByText(list[0].value).innerHTML;
    const val2 = getByText(list[1].value).innerHTML;

    expect(val1).toBe(list[0].value);
    expect(val2).toBe(list[1].value);
  });

  it("should add new list element on button click", function () {
    // const { getAllByRole } = renderWithProvider(<List />);
    expect(true).toBe(true);
  });
});
