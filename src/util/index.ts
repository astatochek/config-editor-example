export type Nil = null | undefined;

export const isNil = (v: unknown): v is Nil => v == null
