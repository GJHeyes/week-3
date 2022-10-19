const { addTwoNumbers } = require("../../../d1-tests/1-easy/addTwoNumbers");

//write the following tests
// checks if addTwoNumbers takes 4 and 6 and returns 10
// checks if addTwoNumbers takes 2 and 0 and returns 2
// checks if addTwoNumbers takes -4 and -6 and returns -10

describe("testing some functions from addTwoNumbers package", () => {
  test("testing that the addTwoNumbers function correctly adds the numbers from the index page", () => {
    expect(10).toBe(addTwoNumbers(4, 6));
    expect(2).toBe(addTwoNumbers(0, 2));
    expect(-10).toBe(addTwoNumbers(-4, -6));
  });
});
