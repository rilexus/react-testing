import { useCallback, useMemo, useState } from "react";

export function useInputBinding(initValue) {
  const [value, setValue] = useState(() => initValue);

  const handleChange = useCallback(
    function (event) {
      const {
        target: { value },
      } = event;
      setValue(value);
    },
    [setValue]
  );

  return useMemo(() => [value, { onChange: handleChange }], [
    value,
    handleChange,
  ]);
}
