import React, { useState } from "react";
import { Box, Button, Switch } from "@mui/material";

import { defaultTheme } from "../../../assets/theme/defaultTheme";
import { darkTheme } from "../../../assets/theme/darkTheme";
import { Typography } from "../../components/Typography";
import { mapThemeWithPalette } from "../../../utils/mapThemeWithColors";

interface Props {
  setTheme: (theme: any) => void;
}

export const ThemeSwitcher: React.FC<Props> = ({ setTheme }) => {
  const [dark, setDark] = useState(false);

  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Typography variant="subtitle1">Theme switcher</Typography>

      <Button
        variant="contained"
        onClick={() => {
          console.log("dark", dark);

          setDark((prev) => {
            if (!prev) {
              const mappedTheme = mapThemeWithPalette(darkTheme);
              setTheme(mappedTheme);
              setDark(true);

              return true;
            }

            const mappedTheme = mapThemeWithPalette(defaultTheme);
            setTheme(mappedTheme);

            return false;
          });
        }}
      >
        Change Theme
      </Button>
    </Box>
  );
};
