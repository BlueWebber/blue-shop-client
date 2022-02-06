import React from "react";
import _ from "lodash";
import ControlledColorPicker from "./controlledColorPicker";

const ColorPicker = ({ theme, setTheme, themeValue }) => {
  const [color, setColor] = React.useState(() => _.get(theme, themeValue));

  const colorSetter = (newColor) =>
    typeof newColor === "string"
      ? setColor(newColor)
      : setColor(
          `rgba(${newColor.r},${newColor.g},${newColor.b},${newColor.a})`
        );

  React.useEffect(
    () => setTheme((t) => _.set(_.cloneDeep(t), themeValue, color)),
    [color, setTheme, themeValue]
  );

  return <ControlledColorPicker color={color} setColor={colorSetter} />;
};

export default ColorPicker;
