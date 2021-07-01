import { hello, pingPong } from "./index";

// Dica: https://jestjs.io/docs/en/expect

describe("hello", () => {
  it("should return 'hello'", () => {
    expect(hello()).toBe("hello");
  });
});

describe('pingPong',  () => {
    it("should return 'ping-pong'", () => {
        expect(pingPong(6)).toBe('ping-pong');
    });

    it("should return 'ping'", () => {
        expect(pingPong(3)).toBe('ping');
    });
})
