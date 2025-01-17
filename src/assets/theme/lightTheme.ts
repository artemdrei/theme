// https://bareynol.github.io/mui-theme-creator/

export const lightTheme = {
  name: "LIGHT_THEME",
  palette: {
    // https://mui.com/material-ui/customization/palette/#color-tokens
    primaryMain: "#1976d2",
    primaryLight: "#42a5f5",
    primaryDark: "#1565c0",
    // secondary...:
    // error...:
    // warning...:
    // info...,
    // success...
  },
  app: {
    background: {
      primary: "#fff",
      secondary: "#f1f1f1",
      colored: "#141333",
      backgroundImage: {
        color: "#fff",
        url: "https://images.unsplash.com/photo-1716962659147-716dd7ead31f?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    gradients: {
      primary: "linear-gradient(0deg, #ededed 9.74%, #d6c3fa 87.02%)",
      secondary:
        "linear-gradient(180deg, #141333 0%, #202261 70.63%, #3a237a 100%)",
      tertiary:
        "linear-gradient(95.17deg, #CF8BF3 -16.49%, #A770EF -15.14%, #FDB99B 115.23%)",
    },
  },
  components: {
    // Buttons
    buttonFontSize: "16px",
    buttonFontWeight: 400,

    buttonPrimaryBackground: "primaryMain",
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

    // Input
    inputFontSize: "16px",
    inputFontWeight: 400,
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
    highlightBackground: "primaryMain",

    // Progress Bar
    progressBarBackground: "primaryLight",
    progressCircleColor: "primaryMain",
    progressCircleBackground: "accent",
  },
  typography: {
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
  breakpoints: {
    // not used for this POC
  },
};
