import React from "react";
import { Box, styled } from "@mui/material";

import imageSrc from "../assets/images/email.png";
import { ButtonAccent, ButtonSecondary } from "../ui/Button";
import { Typography } from "../ui/Typography";
import { ProgressBar } from "../ui/ProgressBar";

interface Props {}

const SRoot = styled("div")`
  width: 100%;
  background: ${({ theme }) => theme.appTheme.app.gradients.secondary};
`;

const ImageStyled = styled("img")`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

const Container = styled("div")`
  width: 600px;
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
  return (
    <SRoot>
      <Container>
        <ProgressBar value={20} sx={{ marginBottom: "20px" }} />

        <ImageStyled src={imageSrc} alt="image" />

        <TitleStyled variant="h5" align="center">
          Great! You just set your first goal!
        </TitleStyled>
        <Typography isAccent variant="body1" align="center">
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
