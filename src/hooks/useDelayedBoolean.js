import { useCallback, useEffect, useState } from "react";

export const useDelayedBoolean = (delay = 3000) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (!value) return;

    const timer = setTimeout(() => setValue(false), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  const trigger = useCallback(() => setValue(true), []);

  return [value, trigger];
};
