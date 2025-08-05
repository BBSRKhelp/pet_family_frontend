import { useState } from "react";

export const useAgeFilter = (initialValues: number[] = [1, 30]) => {
  const [ageRange, setAgeRange] = useState<number[]>(initialValues);

  const handleAgeChange = (_event: Event, newValue: number[]) => {
    setAgeRange(newValue);
  };

  return {
    ageRange,
    handleAgeChange,
  };
};
