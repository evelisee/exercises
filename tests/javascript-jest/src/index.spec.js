import { hello } from "./index";

// Dica: https://jestjs.io/docs/en/expect

describe("hello", () => {
  it("should return hello", () => {
    expect(hello()).toBe("hello");
  });
});
