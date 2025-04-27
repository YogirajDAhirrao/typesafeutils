// src/transformers/index.ts
import { StringOrNumber } from "../types";

export function transform<T>(value: StringOrNumber<T>): StringOrNumber<T> {
  if (typeof value === "string") {
    return value.toUpperCase() as StringOrNumber<T>;
  }
  if (typeof value === "number") {
    return Number(value.toFixed(2)) as StringOrNumber<T>;
  }
  throw new Error("Value must be a string or number");
}
