import React from "react";
import { Box, Switch } from "@mui/material";

import { lightTheme } from "../../../assets/theme/lightTheme";
import { darkTheme } from "../../../assets/theme/darkTheme";
import { Typography } from "../../components/Typography";
import { mapThemeWithPalette } from "../../../utils/mapThemeWithColors";

interface Props {
  themeName: string;
  setTheme: (theme: any) => void;
}

export const ThemeSwitcher: React.FC<Props> = ({ themeName, setTheme }) => {
  const handleSwitchTheme = () => {
    if (themeName === "LIGHT_THEME") {
      const mappedTheme = mapThemeWithPalette(darkTheme);
      setTheme(mappedTheme);

      return;
    }

    if (themeName === "DARK_THEME") {
      const mappedTheme = mapThemeWithPalette(lightTheme);
      setTheme(mappedTheme);

      return;
    }
  };

  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Typography variant="subtitle1">Theme switcher</Typography>

      <span>Light</span>
      <Switch
        checked={themeName === "DARK_THEME"}
        onChange={handleSwitchTheme}
      />
      <span>Dark</span>
    </Box>
  );
};
