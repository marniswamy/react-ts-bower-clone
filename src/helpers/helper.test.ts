import { getOwnerNameHelper } from "./helpers";

describe("getOwnerNameHelper", () => {
  it("it should return 4th element from an array", () => {
    const mockData = "https://github.com/FortAwesome/Font-Awesome.git";
    expect(getOwnerNameHelper(mockData)).toEqual("FortAwesome");
  });
});
