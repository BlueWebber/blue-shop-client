import React from "react";
import _ from "lodash";
import ControlledColorPicker from "./controlledColorPicker";

const ColorPicker = ({
  theme,
  setTheme,
  themeValue,
  withoutAlpha = true,
  colorType = "hex",
}) => {
  const [color, setColor] = React.useState(() => _.get(theme, themeValue));
  const colorGetter = React.useMemo(
    () =>
      colorType === "hex"
        ? (color) => color
        : (color) =>
            typeof color === "string"
              ? color
              : `rgba(${color.r},${color.g},${color.b},${color.a})`,
    [colorType]
  );

  React.useEffect(
    () =>
      setTheme((t) => _.set(_.cloneDeep(t), themeValue, colorGetter(color))),
    [color, setTheme, themeValue, colorGetter]
  );

  return (
    <ControlledColorPicker
      color={color}
      setColor={setColor}
      colorType={colorType}
      disabledAlpha={withoutAlpha}
    />
  );
};

export default ColorPicker;
