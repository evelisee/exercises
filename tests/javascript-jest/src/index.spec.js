import { hello, pingPong, isValidNumber } from "./index";

// Dica: https://jestjs.io/docs/en/expect

describe("hello", () => {
  it("should return 'hello'", () => {
    expect(hello()).toBe("hello");
  });
});

describe("pingPong", () => {
  describe("multiple of 2", () => {
    it("should return ping", () => {
      expect(pingPong(2)).toBe("ping");
    });
  });
  describe("When multiple of 3", () => {
    it("should return pong", () => {
      expect(pingPong(3)).toBe("pong");
    });
  });
  describe("When multiple of 2 and 3", () => {
    it("should return ping-pong", () => {
      expect(pingPong(6)).toBe("ping-pong");
    });
  });
  describe("When is not multiple of 2 and 3", () => {
    it("should return ping-pong", () => {
      expect(pingPong(7)).toBe("-");
    });
  });
});

describe("isValidNumber", () => {
  describe("When pass a number", () => {
    it("should return true", () => {
      expect(isValidNumber(1)).toBe(true);
    });
  });
  describe("When pass a string", () => {
    it("should throw error", () => {
      expect(isValidNumber("sadas")).toThrow(
        new Error("Is not a valid number")
      );
    });
  });
});