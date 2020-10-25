import { capitalize, reverse, calculator, cipher, stats } from "./index";

test("Capitalize the string", () => {
  expect(capitalize("hello world")).toBe("Hello World");
});

test("Reverse the string: 'dog cat'", () => {
  expect(reverse("dog cat")).toBe("god tac");
});

test("calculator method adds 2 + 3", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("calculator method subtracts 8 - 2", () => {
  expect(calculator.subtract(8, 2)).toBe(6);
});

test("calculator method multiplys 9 * 10", () => {
  expect(calculator.multiply(9, 10)).toBe(90);
});

test("calculator method divides 50 / 10", () => {
  expect(calculator.divide(50, 10)).toBe(5);
});

test("Ceasar cipher string 'dog cat zebra' to be 'grj fdw cheud'", () => {
  expect(cipher("dog cat zebra", 3)).toBe("grj fdw cheud");
});

test("cipher to support uppercase strings", () => {
  expect(cipher("DOG CAT ZEBRA", 3)).toBe("grj fdw cheud");
});

test("cipher to supports punctuation and numbers", () => {
  expect(cipher("DOG1, CAT2, & ZEBRA3", 3)).toBe("grj1, fdw2, & cheud3");
});

test("Stats method returns average value", () => {
  expect(stats([1, 22, 5, 3, 6, 15, 25, 9, 13]).average).toBe(11);
});

test("Stats method returns minumum value", () => {
  expect(stats([1, 22, 5, 3, 6, 15, 25, 9, 13]).min).toBe(1);
});

test("Stats method returns maximum value", () => {
  expect(stats([1, 22, 5, 3, 6, 15, 25, 9, 13]).max).toBe(25);
});

test("Stats method returns numbers array length", () => {
  expect(stats([1, 22, 5, 3, 6, 15, 25, 9, 13]).length).toBe(9);
});
