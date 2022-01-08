import React from "react";
import _ from "lodash";

const useLocalStateObj = (initialValue) => {
  const [value, setValue] = React.useState(() => _.cloneDeep(initialValue));

  React.useEffect(() => setValue(_.cloneDeep(initialValue)), [initialValue]);

  return [value, setValue];
};

export default useLocalStateObj;
