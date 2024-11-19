import React from "react";

export const useToggle = (initialValue = false): [boolean, () => void] => {
  if (typeof initialValue !== "boolean") {
    console.warn("Invalid type for useToggle");
  }

  const [value, setValue] = React.useState(initialValue);

  const toggleValue = React.useCallback(function toggleValue() {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggleValue];
};
