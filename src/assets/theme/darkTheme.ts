export const darkTheme = {
  palette: {
    // https://mui.com/material-ui/customization/palette/#color-tokens
    primaryMain: "#9c27b0",
    primaryLight: "#ba68c8",
    primaryDark: "#7b1fa2",
    // secondary...:
    // error...:
    // warning...:
    // info...,
    // success...
  },
  app: {
    background: {
      primary: "rgb(33, 33, 33)",
      secondary: "#f1f1f1",
      colored: "#141333",
      backgroundImage:
        "https://appnebula.co/_next/image?url=https%3A%2F%2Fmedia.asknebula.com%2Fappnebula-images%2Fbackgrounds%2Fmobile%2Fmoon_phases.jpg&w=1920&q=100",
    },
    gradients: {
      primary: "linear-gradient(0deg, #400078 9.74%, #732BFF 87.02%)",
      secondary:
        "linear-gradient(95.17deg, #CF8BF3 -16.49%, #A770EF -15.14%, #FDB99B 115.23%)",
      tertiary:
        "linear-gradient(95.17deg, #CF8BF3 -16.49%, #A770EF -15.14%, #FDB99B 115.23%)",
    },
  },
  components: {
    // Buttons
    buttonFontSize: "20px",
    buttonFontWeight: 700,

    buttonPrimaryBackground: "primaryMain",
    buttonPrimaryBackgroundHover: "primaryLight",
    buttonPrimaryBackgroundActive: "primaryDark",
    buttonPrimaryBackgroundDisabled: "#E0E0E0",
    buttonPrimaryTextColor: "#FBFBFF",
    buttonPrimaryTextColorDisabled: "#FBFBFF",
    buttonPrimaryBoxShadow: "0px 4px 4px 0px #00000040",
    // buttonBorderColor: if needed for next buttons

    buttonSecondaryBackground: "transparent",
    buttonSecondaryBackgroundHover: "rgba(255,255,255, .2)",
    buttonSecondaryBackgroundActive: "#FBFBFF",
    buttonSecondaryBackgroundDisabled: "E0E0E0",
    buttonSecondaryTextColor: "#fff",
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
    highlightBackground: "neutral600",

    // Progress Bar
    progressBarBackground: "neutral600",
    progressCircleColor: "accent",
    progressCircleBackground: "neutral600",
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
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: 1.67,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    h5: {
      fontSize: "26px",
      fontWeight: 700,
      lineHeight: 1.67,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    h6: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: 1.67,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    subtitle1: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: 1.67,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    subtitle2: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: 1.67,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.67,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    body2: {
      fontSize: "16px",
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
