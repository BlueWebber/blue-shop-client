import React from "react";
import _ from "lodash";
import ControlledColorPicker from "./controlledColorPicker";

const ColorPicker = ({ theme, setTheme, themeValue }) => {
  const [color, setColor] = React.useState(() => _.get(theme, themeValue));
  const colorGetter = (color) =>
    typeof color === "string"
      ? color
      : `rgba(${color.r},${color.g},${color.b},${color.a})`;

  React.useEffect(
    () =>
      setTheme((t) => _.set(_.cloneDeep(t), themeValue, colorGetter(color))),
    [color, setTheme, themeValue]
  );

  return <ControlledColorPicker color={color} setColor={setColor} />;
};

export default ColorPicker;
