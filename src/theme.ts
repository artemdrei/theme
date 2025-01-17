// import { BreakpointValues, Theme, ThemeTypes } from "../entities";

export enum BreakpointValues {
  MAX_MOBILE_WIDTH = 1024,
  MIN_DESKTOP_WIDTH = 1025,
}

export const lightTheme = {
  colors: {
    typography100: "#FBFBFF",
    typography200: "#E0E0E0",
    typography300: "#CDCDCD",
    typography400: "#9B9B9B",
    typography500: "#828282",
    typography600: "#4F4F4F",
    typography700: "#333333",
    typography800: "#201F1F",
    typography900: "#0F0F0F",

    primary100: "#E8E8FC",
    primary200: "#D2D1F9",
    primary300: "#BBBAF6",
    primary400: "#A5A3F3",
    primary500: "#8E8CF0",
    primary600: "#7270C0",
    primary700: "#555490",
    primary800: "#393860",
    primary900: "#1C1C30",

    secondary100: "#B1B1CE",
    secondary200: "#8A8AB5",
    secondary300: "#63639D",
    secondary400: "#505090",
    secondary500: "#3C3C84",
    secondary600: "#282861",
    secondary700: "#24244F",
    secondary800: "#141333",
    secondary900: "#0C0C1A",

    tertiary100: "#F1E1F7",
    tertiary200: "#E4C4F0",
    tertiary300: "#D6A6E8",
    tertiary400: "#C989E1",
    tertiary500: "#BB6BD9",
    tertiary600: "#9656AE",
    tertiary700: "#704082",
    tertiary800: "#4B2B57",
    tertiary900: "#25152B",

    accent: "#555BF6",

    success100: "#D3EADD",
    success200: "#B4E8CA",
    success300: "#6CCF96",
    success400: "#4DAB75",
    success500: "#27AE60",
    success600: "#1A7842",
    success700: "#145A32",
    success800: "#0D3C21",
    success900: "#071E11",

    error100: "#FACFD0",
    error200: "#F49EA1",
    error300: "#EF6E73",
    error400: "#E93D44",
    error500: "#E40D15",
    error600: "#B60A11",
    error700: "#89080D",
    error800: "#5B0508",
    error900: "#2E0304",

    warning100: "#FCEBDB",
    warning200: "#FAD6B7",
    warning300: "#F7C292",
    warning400: "#F5AD6E",
    warning500: "#F2994A",
    warning600: "#C27A3B",
    warning700: "#915C2C",
    warning800: "#613D1E",
    warning900: "#301F0F",

    textPrimary: "#2f2e37",
    themeBackground: "#FEFEFE",
    themeBackgroundLight: "#EAEEF7",
    primaryLeo: "#D4C6E5",
    primarySagitarius: "#E4832D",
    primaryLight: "",
    secondaryDark: "#bdbdbd",
    error: "#EB5757",
    warning: "#F2C94C",
    warningLight: "#FBE69B",
    info: "#6A3AA2",
    infoLight: "#9974F6",
    primaryLink: "#219653",
    mainLink: "#0000EF",
    lunarViolet: "#454895",
    chart500: "#56CCF2",
    dark: "",
  },
  gradients: {
    primary: "linear-gradient(0deg, #400078 9.74%, #732BFF 87.02%)",
    primaryHover:
      "linear-gradient(167.62deg, #141333 -32.12%, #3639A2 4.19%, #6D4BCD 49.79%, #9D5BE9 81.72%);",
    secondary:
      "linear-gradient(180deg, #141333 0%, #202261 70.63%, #3a237a 100%)",
    secondaryLight: "linear-gradient(90.6deg, #6A4DBC 0.47%, #F2994A 137.94%)",
    background: "linear-gradient(89.69deg, #975bdd -30.16%, #fc9f33 153.85%)",
    geminiGradient: "linear-gradient(96deg, #642b73 0%, #c6426e 100%)",
    gradientPinkDropDown: "linear-gradient(94deg, #6a4dbc 0%, #f2994a 100%)",
    lightActive: "",
  },
  breakpoints: {
    values: {
      mobile: BreakpointValues.MAX_MOBILE_WIDTH,
      desktop: BreakpointValues.MIN_DESKTOP_WIDTH,
    },
    mobile: `(max-width: ${BreakpointValues.MAX_MOBILE_WIDTH}px)`,
    desktop: `(min-width: ${BreakpointValues.MIN_DESKTOP_WIDTH}px)`,
  },
};
