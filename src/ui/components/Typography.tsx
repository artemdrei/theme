import React from "react";
import {
  styled,
  Typography as MuiTypography,
  TypographyProps,
} from "@mui/material";
import { getContrastColor } from "../../utils/getContrastText";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption"
  | "subtitle1"
  | "subtitle2";

// future colors: accent | error | warring and so on. But be careful - don't extend color for each cases (replace specific color on the place)
type Color = "body" | "accent" | "heading" | "secondary";

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
      body: theme.appTheme.components.fontPrimaryColor,
      accent: theme.appTheme.components.fontAccentColor,
      heading: theme.appTheme.components.fontPrimaryAccentColor,
      secondary: theme.appTheme.components.fontSecondaryColor,
    };

    const colorsLight: Record<Color, string> = {
      body: theme.appTheme.components.fontPrimaryColorLight,
      accent: theme.appTheme.components.fontAccentColorLight,
      heading: theme.appTheme.components.fontPrimaryAccentColorLight,
      secondary: theme.appTheme.components.fontSecondaryColorLight,
    };

    const contrastColor = getContrastColor(background);
    const colorVariant = contrastColor === "light" ? colorsLight : colorsDark;

    return {
      fontSize: fontSize
        ? fontSize
        : theme.appTheme.typography[variant].fontSize,
      fontFamily: fontFamily
        ? fontFamily
        : theme.appTheme.typography[variant].fontFamily,
      fontWeight: fontWeight
        ? fontWeight
        : theme.appTheme.typography[variant].fontWeight,
      lineHeight: lineHeight
        ? fontWeight
        : theme.appTheme.typography[variant].lineHeight,
      color: colorVariant[color],
    };
  }}
`;

export const Typography: React.FC<PropsNew> = (props) => {
  return <TypographyStyled {...props} />;
};
