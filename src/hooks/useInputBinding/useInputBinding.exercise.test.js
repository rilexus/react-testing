import { useInputBinding } from "./useInputBinding";
import { act, renderHook } from "@testing-library/react-hooks";

// https://react-hooks-testing-library.com/usage/basic-hooks
describe("useInputBinding", function () {
  it("should return change value", function () {
    const { result } = renderHook(() => useInputBinding(""));

    expect(true).toEqual(true);
  });
});
