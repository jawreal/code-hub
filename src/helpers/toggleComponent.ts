import React from 'react';

type ToggleComponentParams<T extends Record<string, boolean>> = {
  valueKey: keyof T;
  initialValue: boolean | ((prev: boolean) => boolean);
  setState: React.Dispatch<React.SetStateAction<T>>;
};

export const toggleComponent = <T extends Record<string, boolean>>({
  valueKey,
  initialValue,
  setState,
}: ToggleComponentParams<T>) => {
  setState((prevData) => ({
    ...prevData,
    [valueKey]: typeof initialValue === "function"
      ? (initialValue as (prev: boolean) => boolean)(prevData[valueKey])
      : initialValue,
  }));
};