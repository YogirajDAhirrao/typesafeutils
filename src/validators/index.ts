// src/validators/index.ts
import { ConstrainedValue, StringOrNumber } from "../types";

type ValidationResult<T> = {
  isValid: boolean;
  value: T | null;
  error?: string;
};

export function validate<T, C>(
  value: T,
  constraints: C
): ValidationResult<StringOrNumber<T> & ConstrainedValue<T, C>> {
  if (typeof value === "string") {
    const { minLength, maxLength } = constraints as {
      minLength?: number;
      maxLength?: number;
    };
    if (minLength && value.length < minLength) {
      return {
        isValid: false,
        value: null,
        error: `Length must be at least ${minLength}`,
      };
    }
    if (maxLength && value.length > maxLength) {
      return {
        isValid: false,
        value: null,
        error: `Length must not exceed ${maxLength}`,
      };
    }
    return {
      isValid: true,
      value: value as StringOrNumber<T> & ConstrainedValue<T, C>,
      error: undefined,
    };
  }

  if (typeof value === "number") {
    const { min, max } = constraints as { min?: number; max?: number };
    if (min !== undefined && value < min) {
      return {
        isValid: false,
        value: null,
        error: `Value must be at least ${min}`,
      };
    }
    if (max !== undefined && value > max) {
      return {
        isValid: false,
        value: null,
        error: `Value must not exceed ${max}`,
      };
    }
    return {
      isValid: true,
      value: value as StringOrNumber<T> & ConstrainedValue<T, C>,
      error: undefined,
    };
  }

  return {
    isValid: false,
    value: null,
    error: "Value must be a string or number",
  };
}
