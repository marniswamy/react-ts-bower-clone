import { getOwnerNameHelper, getPageTitle } from "./helpers";

describe("getOwnerNameHelper", () => {
  it("it should return 4th element from an array", () => {
    const mockData = "https://github.com/FortAwesome/Font-Awesome.git";
    expect(getOwnerNameHelper(mockData)).toEqual("FortAwesome");
  });

  it("it should return Leaflet from this url", () => {
    const mockData = "https://github.com/Leaflet/Leaflet";
    expect(getOwnerNameHelper(mockData)).toEqual("Leaflet");
  });
});
