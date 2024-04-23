import React from "react";
import {
  styled,
  Typography as MuiTypography,
  TypographyProps,
} from "@mui/material";
import { getContrastColor } from "../utils/getContrastText";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption";

type Color = "body" | "accent" | "heading" | "secondary"; // future: accent | error | warring and so on

interface PropsNew extends TypographyProps {
  color?: Color;
  variant?: Variant;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: string;
  background?: string;
}

const TypographyStyled = styled(MuiTypography)<PropsNew>`
  ${({
    theme,
    color = "body",
    variant = "body1",
    background = "#fff",
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
  }) => {
    const colorsDark: Record<Color, string> = {
      body: theme.appTheme.component.fontPrimaryColor,
      accent: theme.appTheme.component.fontAccentColor,
      heading: theme.appTheme.component.fontPrimaryAccentColor,
      secondary: theme.appTheme.component.fontSecondaryColor,
    };

    const colorsLight: Record<Color, string> = {
      body: theme.appTheme.component.fontPrimaryColorLight,
      accent: theme.appTheme.component.fontAccentColorLight,
      heading: theme.appTheme.component.fontPrimaryAccentColorLight,
      secondary: theme.appTheme.component.fontSecondaryColorLight,
    };

    const contrastColor = getContrastColor(background);
    const colorVariant = contrastColor === "light" ? colorsLight : colorsDark;

    return {
      fontSize: fontSize
        ? fontSize
        : theme.appTheme.typography.heading[variant].fontSize,
      fontFamily: fontFamily
        ? fontFamily
        : theme.appTheme.typography.heading[variant].fontFamily,
      fontWeight: fontWeight
        ? fontWeight
        : theme.appTheme.typography.heading[variant].fontWeight,
      lineHeight: lineHeight
        ? fontWeight
        : theme.appTheme.typography.heading[variant].lineHeight,
      color: colorVariant[color],
    };
  }}
`;

export const Typography: React.FC<PropsNew> = (props) => {
  return <TypographyStyled {...props} />;
};
