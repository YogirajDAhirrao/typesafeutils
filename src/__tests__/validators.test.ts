// src/__tests__/validators.test.ts
import { validate } from "../validators";

describe("validate", () => {
  test("validates a string with length constraints", () => {
    const result = validate("hello", { minLength: 3, maxLength: 10 });
    expect(result.isValid).toBe(true);
    expect(result.value).toBe("hello");
  });

  test("fails for a string below minLength", () => {
    const result = validate("hi", { minLength: 3 });
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Length must be at least 3");
  });

  test("validates a number with range constraints", () => {
    const result = validate(42, { min: 0, max: 100 });
    expect(result.isValid).toBe(true);
    expect(result.value).toBe(42);
  });
});

// src/__tests__/transformers.test.ts
import { transform } from "../transformers";

describe("transform", () => {
  test("converts string to uppercase", () => {
    const result = transform("hello");
    expect(result).toBe("HELLO");
  });

  test("formats number to 2 decimal places", () => {
    const result = transform(42.123);
    expect(result).toBe(42.12);
  });
});
