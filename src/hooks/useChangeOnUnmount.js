import React from "react";
import { useThemeCreatorSaving } from "../context/themeCreatorSaving";

const useChangeOnUnmount = (value, setValue) => {
  const isMounted = React.useRef(false);
  const [isSaving, setIsSaving] = useThemeCreatorSaving();
  React.useLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  React.useLayoutEffect(() => {
    if (isMounted.current === false) {
      setValue(value);
    }
    if (isSaving) {
      setIsSaving(false);
      setValue(value);
    }
  }, [value, setValue, isSaving, setIsSaving]);
};

export default useChangeOnUnmount;
