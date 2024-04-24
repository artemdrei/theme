import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import { defaultTheme } from "./assets/theme/defaultTheme";

import styled from "@emotion/styled";
import { Funnel } from "./ui/flow/Funnel";
import { useState } from "react";
import { Editor } from "./ui/customization/editor/Editor";
import { ThemeSwitcher } from "./ui/customization/themeSwitcher/ThemeSwitcher";
import { mapThemeWithPalette } from "./utils/mapThemeWithColors";
import { ColorPicker } from "./ui/customization/colorPicker/ColorPicker";

const LayoutStyled = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const LeftStyled = styled("div")`
  width: 30%;
  padding: 20px;
`;

const RightStyled = styled("div")`
  width: 70%;
`;

export const App = () => {
  const mappedTheme = mapThemeWithPalette(defaultTheme);
  const [theme, setTheme] = useState(mappedTheme);
  const [title, setTitle] = useState(
    "Ready for insights into your love, life, and emotions?"
  );

  // Not this is default theme
  // Next steps - fetch theme from backend, if exists use it, if not use this default theme
  const appTheme = createTheme({ appTheme: theme });

  return (
    <ThemeProvider key={theme.palette.primaryMain} theme={appTheme}>
      <Container component="main" sx={{ flexDirection: "column" }}>
        <CssBaseline />

        <LayoutStyled>
          <LeftStyled>
            <ThemeSwitcher setTheme={setTheme} />
            <ColorPicker theme={theme} setTheme={setTheme} />
            <Editor title={title} setTitle={setTitle} />
          </LeftStyled>

          <RightStyled>
            <Funnel title={title} />
          </RightStyled>
        </LayoutStyled>
      </Container>
    </ThemeProvider>
  );
};
