import type { Error } from "./error";

export type Envelope<T> = {
  result: T | null;
  errors: Error[] | null;
  timeGenerated: Date;
};
