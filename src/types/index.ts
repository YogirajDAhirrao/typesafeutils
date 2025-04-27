// src/types/index.ts
export type StringOrNumber<T> = T extends string | number ? T : never;

export type ConstrainedValue<T, Constraint> = T extends StringOrNumber<T>
  ? Constraint extends { min?: number; max?: number }
    ? T extends number
      ? number
      : Constraint extends { minLength?: number; maxLength?: number }
      ? T extends string
        ? string
        : never
      : never
    : never
  : never;
