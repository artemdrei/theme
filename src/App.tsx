import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import { appTheme } from "./theme/theme";
import { EmailScreen } from "./screens/Email";
import { OnboardingScreen } from "./screens/Onboarding";
import { PaymentScreen } from "./screens/Payment";

const theme = createTheme({ appTheme });

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ flexDirection: "column" }}>
        <CssBaseline />

        <EmailScreen />
        <OnboardingScreen />
        <PaymentScreen />
      </Container>
    </ThemeProvider>
  );
};
