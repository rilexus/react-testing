import { useInputBinding } from "./useInputBinding";
import { act, renderHook } from "@testing-library/react-hooks";

// https://react-hooks-testing-library.com/usage/basic-hooks
describe("useInputBinding", function () {
  it("should return change value", function () {
    const { result } = renderHook(() => useInputBinding(""));

    act(() => {
      const handleChange = result.current[1].onChange;
      handleChange({ target: { value: "value" } });
    });
    const value = result.current[0];
    // await waitForNextUpdate();
    expect(value).toEqual("value");
  });
});
