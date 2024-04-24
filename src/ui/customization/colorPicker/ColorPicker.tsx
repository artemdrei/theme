import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Typography } from "../../components/Typography";
import { AppTheme } from "../../../assets/theme/styled";
import { mapThemeWithPalette } from "../../../utils/mapThemeWithColors";

interface Props {
  theme: AppTheme["appTheme"];
  setTheme: (theme: any) => void;
}

export const ColorPicker: React.FC<Props> = ({ theme, setTheme }) => {
  const [color, setColor] = useState(theme.palette.primaryMain);

  const changeColor = (color: string) => {
    setColor(color);

    setTheme((prev: any) => {
      const updatedTheme = {
        ...prev,
        palette: {
          ...prev.palette,
          primaryMain: color,
        },
        components: {
          ...prev.components,
          buttonPrimaryBackground: color,
          progressBarBackground: color,
        },
      };

      // In next iteration prevent change of components
      // After first mapThemeWithPalette progressBarBackground: primaryMain was change
      // on progressBarBackground: #someColor. And this mapping doesn't work
      const theme = mapThemeWithPalette(updatedTheme);

      return theme;
    });
  };

  return (
    <>
      <Typography variant="subtitle1">Accent color</Typography>
      <HexColorPicker color={color} onChange={changeColor} />
    </>
  );
};
