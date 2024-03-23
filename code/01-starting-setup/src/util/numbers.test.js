import { it, expect, describe } from "vitest";

import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it("should yield NaN for non-transformable values", () => {
    const input = "invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("clenNumbers()", () => {
  it("should retuurn an array if na arrray of string number values is provided", () => {
    /* Because objects defined different in memory, they are not equal */
    // Arrange
    const numberValues = ["1", "2", "3"];
    // Act
    const cleanedNumbers = cleanNumbers(numberValues);
    // Assert
    expect(cleanedNumbers).toMatchObject([1, 2, 3]);
  });

  it("should throw an error if array with at least one empty string is provided", () => {
    const numberValues = ["", 1];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow(/must not be empty/);
  });
});
