import { renderHook } from "@testing-library/react-hooks";
import { useFetchUsers } from "./useFetchUsers";

jest.mock("../../api/api", () => ({
  fetchUser: jest.fn().mockResolvedValue([{ id: "id", first_name: "Stan" }]),
}));

// https://react-hooks-testing-library.com/
describe("useFetchUsers hook", function () {
  it("should return array of users", async function () {
    const { result, waitForNextUpdate, wait } = renderHook(() =>
      useFetchUsers()
    );

    await waitForNextUpdate();

    expect(result.current).toEqual([{ id: "id", first_name: "Stan" }]);
  });
});
