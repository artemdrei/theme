import { fontWeight } from "@mui/system";

export const appTheme = {
  palette: {
    error: "#F04D4D",
    accent: "#F94E6A",
    accentSecondary: "#F94E6A",
    // unused: "transparent",
    // success: "#349840",
    // neutral0: "#FFFFFF",
    // neutral25: "#EEEEEE",
    // neutral50: "#E2E2E2",
    // neutral100: "#D0D0D0",
    // neutral200: "#ABABAB",
    // neutral300: "#8A8A8A",
    // neutral400: "#636363",
    // neutral500: "#505050",
    // neutral600: "#323232",
    // neutral700: "#232323",
    // neutral800: "#1C1C1C",
    // neutral900: "#121212",
    // neutralHue: "",
    // fontPrimary: "#D0D0D0",
    // neutral1000: "#0A0A0A",
    // fontSecondary: "#8A8A8A",
  },
  app: {
    background: {
      primary: "#fff",
      secondary: "#f1f1f1",
      colored: "#141333",
    },
    gradients: {
      primary: "linear-gradient(0deg, #400078 9.74%, #732BFF 87.02%)",
      primaryHover:
        "linear-gradient(167.62deg, #141333 -32.12%, #3639A2 4.19%, #6D4BCD 49.79%, #9D5BE9 81.72%);",
      secondary:
        "linear-gradient(180deg, #141333 0%, #202261 70.63%, #3a237a 100%)",
      secondaryLight:
        "linear-gradient(90.6deg, #6A4DBC 0.47%, #F2994A 137.94%)",
      background: "linear-gradient(89.69deg, #975bdd -30.16%, #fc9f33 153.85%)",
      geminiGradient: "linear-gradient(96deg, #642b73 0%, #c6426e 100%)",
      tertiary:
        "linear-gradient(95.17deg, #CF8BF3 -16.49%, #A770EF -15.14%, #FDB99B 115.23%)",
    },
  },
  component: {
    // Buttons
    buttonPrimaryBackground:
      "linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)",
    buttonPrimaryBackgroundHover:
      "linear-gradient(165.54deg, #141333 -33.39%,  #6939A2 20%)",
    buttonPrimaryBackgroundActive:
      "linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)",
    buttonPrimaryBackgroundDisabled: "#E0E0E0",
    buttonPrimaryTextColor: "#FBFBFF",
    buttonPrimaryTextColorDisabled: "#FBFBFF",
    buttonPrimaryBoxShadow: "0px 4px 4px 0px #00000040",

    buttonSecondaryBackground: "#FBFBFF",
    buttonSecondaryBackgroundHover: "#e2dcdc",
    buttonSecondaryBackgroundActive: "#FBFBFF",
    buttonSecondaryBackgroundDisabled: "E0E0E0",
    buttonSecondaryTextColor: "#6A3AA2",
    buttonSecondaryTextColorDisabled: "#FBFBFF",
    buttonSecondaryBoxShadow: "",

    buttonSuccessBackground: "#27AE60",
    buttonSuccessBackgroundHover: "#69B13F",
    buttonSuccessBackgroundActive: "#4e832f",
    buttonSuccessBackgroundDisabled: "#c2c2c2",
    buttonSuccessTextColor: "#fff",
    buttonSuccessTextColorDisabled: "#fff",
    buttonSuccessBoxShadow: "",

    // Inputs
    inputBackground: "#fff",
    inputBackgroundDisabled: "rgba(0,0,0, 0.1)",
    inputBackgroundFocus: "#f1f1f1",
    inputBackgroundHover: "#c6c6c6",
    inputBorderColor: "#C6C6C6",
    inputBorderColorActive: "#9c9c9c",
    inputBorderColorDisabled: "#C6C6C6",
    inputBorderColorError: "#F04D4D",

    // Fonts
    fontAccentColor: "#6A3AA2",
    fontPrimaryColor: "#395677",
    fontPrimaryAccentColor: "#30455c",
    fontSecondaryColor: "#5e6e80",
    fontAccentColorLight: "#ca9bff",
    fontPrimaryColorLight: "#fff",
    fontPrimaryAccentColorLight: "#f2f2f2",
    fontSecondaryColorLight: "#eaeaea",

    // Divider
    dividerBackground: "#777",

    // Highlights
    highlightBackground: "neutral600",

    // Progress Bar
    progressBarBackground: "neutral600",
    progressCircleBackground: "neutral600",
    progressCircleColor: "accent",
  },
  typography: {
    button: {
      fontSize: "16px",
      fontWeight: 400,
    },
    select: {
      fontSize: "16px",
      fontWeight: 400,
    },
    heading: {
      h1: {
        fontSize: "60px",
        fontWeight: 700,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`, // Figure out do we need this, or use one font for all
      },
      h2: {
        fontSize: "50px",
        fontWeight: 700,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
      h3: {
        fontSize: "40px",
        fontWeight: 700,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
      h4: {
        fontSize: "30px",
        fontWeight: 700,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
      h5: {
        fontSize: "20px",
        fontWeight: 700,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
      h6: {
        fontSize: "20px",
        fontWeight: 700,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
      subtitle1: {
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
      subtitle2: {
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
      body1: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
      body2: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
      caption: {
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: 1.67,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
    },
  },
};

export type AppTheme = { appTheme: typeof appTheme };
