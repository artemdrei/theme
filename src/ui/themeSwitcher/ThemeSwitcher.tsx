import React from "react";
import { Box, Switch } from "@mui/material";

import { defaultTheme } from "../../assets/theme/defaultTheme";
import { darkTheme } from "../../assets/theme/darkTheme";
import { Typography } from "../components/Typography";

interface Props {
  setTheme: (theme: any) => void;
}

export const ThemeSwitcher: React.FC<Props> = ({ setTheme }) => {
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Typography variant="subtitle1">Theme switcher</Typography>
      <Switch
        onChange={(e) => {
          if (e.target.checked) {
            setTheme(darkTheme);

            return;
          }

          setTheme(defaultTheme);
        }}
      />
    </Box>
  );
};
