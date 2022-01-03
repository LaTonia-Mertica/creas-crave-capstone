import { handleBodyLinks } from "./BodyLinks";

describe("handleBodyLinks", () => {
  it("should return if search for myStory finds myStory", () => {
    expect(handleBodyLinks("myStory")).toEqual("myStory");
  });
});
