const {
  subtractTwoNumbers,
} = require("../../../d1-tests/1-easy/subtractTwoNumbers");

//write the following tests
// checks if subtractTwoNumbers takes 4 from 10 and returns 6
// checks if subtractTwoNumbers takes 0 from 4 and returns 0
// checks if subtractTwoNumbers takes 5 from 3 and returns -2
// checks if subtractTwoNumbers takes -6 from -4 and returns 2

describe("Check whether the subtractTwoNumbers formula works", () => {
  test("test whether two positive numbers add together", () => {
    expect(subtractTwoNumbers(10, 4)).toBe(6);
  });
  test("test whether a positive number and 0 add together", () => {
    expect(subtractTwoNumbers(4, 0)).toBe(4);
  });
  test("test whether two positive numbers add together", () => {
    expect(subtractTwoNumbers(3, 5)).toBe(-2);
  });
  test("test whether two negative numbers add together", () => {
    expect(subtractTwoNumbers(-4, -6)).toBe(2);
  });
});
