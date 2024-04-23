import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import { appTheme } from "./assets/theme/theme";
import { content as defaultContent, Content } from "./assets/content";

import styled from "@emotion/styled";
import { Funnel } from "./ui/flow/Funnel";
import { useState } from "react";
import { Editor } from "./ui/editor/Editor";

const theme = createTheme({ appTheme });

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
  const [content, setContent] = useState<Content>(defaultContent);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ flexDirection: "column" }}>
        <CssBaseline />

        <LayoutStyled>
          <LeftStyled>
            <Editor content={content} setContent={setContent} />
          </LeftStyled>

          <RightStyled>
            <Funnel content={content} />
          </RightStyled>
        </LayoutStyled>
      </Container>
    </ThemeProvider>
  );
};
