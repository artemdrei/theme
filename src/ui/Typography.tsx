import React from "react";
import {
  styled,
  Typography as MuiTypography,
  TypographyProps,
} from "@mui/material";

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

interface Props extends TypographyProps {
  isAccent?: boolean;
  myVariant?: Variant;
}

const TypographyStyled = styled(MuiTypography)<any>`
  ${(props) => {
    const colors = {
      accent: props.theme.appTheme.component.fontAccentColor,
      heading: props.theme.appTheme.component.fontPrimaryAccentColor,
      body: props.theme.appTheme.component.fontPrimaryColor,
      secondary: props.theme.appTheme.component.fontSecondaryColor,
      accentLight: props.theme.appTheme.component.fontAccentColorLight,
      headingLight: props.theme.appTheme.component.fontPrimaryAccentColorLight,
      bodyLight: props.theme.appTheme.component.fontPrimaryColorLight,
      secondaryLight: props.theme.appTheme.component.fontSecondaryColorLight,
    };

    const getColor = () => {
      if (props.isAccent) {
        return colors.accent;
      }

      if (props.variant === "body1" || props.variant === "body2") {
        return colors.body;
      }

      if (props.variant === "caption") {
        return colors.secondary;
      }

      return colors.heading;
    };

    if (
      props.variant === "h1" ||
      props.variant === "h2" ||
      props.variant === "h3" ||
      props.variant === "h4" ||
      props.variant === "h5" ||
      props.variant === "h6" ||
      props.variant === "body1" ||
      props.variant === "body2" ||
      props.variant === "subtitle1" ||
      props.variant === "subtitle2" ||
      props.variant === "caption"
    )
      return {
        fontSize:
          props.fontSize ??
          props.theme.appTheme.typography.heading[props.variant].fontSize,
        fontFamily:
          props.fontFamily ??
          props.theme.appTheme.typography.heading[props.variant].fontFamily,
        fontWeight:
          props.fontWeight ??
          props.theme.appTheme.typography.heading[props.variant].fontWeight,
        lineHeight:
          props.lineHeight ??
          props.theme.appTheme.typography.heading[props.variant].lineHeight,
        color: getColor(),
      };
  }}
`;

export const Typography: React.FC<Props> = (props) => {
  return <TypographyStyled {...props} />;
};
