import ruLocales from "../constants/locales/ru.json";

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export const t = (key: string): string => {
  const keys = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = ruLocales;

  for (const k of keys) {
    result = result[k];
    if (result === undefined) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
  }

  return result as string;
};

export type AppLocales = DeepReadonly<typeof ruLocales>;
