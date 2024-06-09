import React from "react";
import { Box, styled, useTheme } from "@mui/material";

import imageSrc from "../../assets/images/email.png";
import { ButtonAccent, ButtonSecondary } from "../components/Button";
import { Typography } from "../components/Typography";
import { ProgressBar } from "../components/ProgressBar";

interface Props {}

const SRoot = styled("div")`
  width: 100%;

  ${({ theme }) => {
    if (theme.appTheme.app.background.backgroundImage) {
      return {
        background: `center / cover no-repeat url(${theme.appTheme.app.background.backgroundImage})`,
      };
    }

    return {
      background: theme.appTheme.app.gradients.secondary,
    };
  }}
`;

const ImageStyled = styled("img")`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

const Container = styled("div")`
  height: 100%;
  margin: 0 auto;
  padding: 32px;
`;

const TitleStyled = styled(Typography)`
  margin-top: 20px;
`;

const ButtonSecondaryStyled = styled(ButtonSecondary)`
  margin-left: 20px;
`;

export const OnboardingScreen: React.FC<Props> = () => {
  const theme = useTheme();
  const backgroundColor = theme.appTheme.app.gradients.primary;

  return (
    <SRoot>
      <Container sx={{ background: backgroundColor }}>
        <ProgressBar value={20} sx={{ marginBottom: "20px" }} />

        <ImageStyled src={imageSrc} alt="image" />

        <TitleStyled
          align="center"
          background={backgroundColor}
          colorVariant="heading"
        >
          Great! You just set your first goal!
        </TitleStyled>
        <Typography
          colorVariant="body"
          background={backgroundColor}
          align="center"
        >
          Let's keep going so we can get to know you better.
        </Typography>
        <Box
          sx={{ marginTop: "100px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ButtonAccent>Back</ButtonAccent>
          <ButtonSecondaryStyled>Accept</ButtonSecondaryStyled>
        </Box>
      </Container>
    </SRoot>
  );
};
