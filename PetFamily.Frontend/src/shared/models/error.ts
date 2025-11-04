import type { ErrorType } from "./errorType";

export type Error = {
  code: string;
  message: string;
  type: ErrorType;
  invalidField: string | null;
};
