import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import { appTheme } from "./assets/theme/theme";

import styled from "@emotion/styled";
import { Funnel } from "./ui/funnel/Funnel";

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
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ flexDirection: "column" }}>
        <CssBaseline />

        <LayoutStyled>
          <LeftStyled>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            nemo enim est autem voluptates reiciendis officiis, repudiandae
            sapiente ipsum voluptate, ut neque harum debitis ullam. Cumque ipsa
            placeat beatae deserunt!
          </LeftStyled>

          <RightStyled>
            <Funnel />
          </RightStyled>
        </LayoutStyled>
      </Container>
    </ThemeProvider>
  );
};
