import React, { useState } from "react";
import { Box, styled, useTheme } from "@mui/material";

import imageSrc from "../../assets/images/confirm_email.png";
import { ButtonAccent } from "../components/Button";
import { Typography } from "../components/Typography";
import { Input } from "../components/Input";
import { ProgressBar } from "../components/ProgressBar";

const SRoot = styled("span")`
  width: 100%;
  background: ${({ theme }) => theme.appTheme.app.background.primary};
`;

const ImageStyled = styled("img")`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

const Container = styled("div")<{ url: string }>`
  height: 100%;
  margin: 0 auto;
  padding: 32px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;a
`;

const TitleStyled = styled(Typography)`
  margin-top: 20px;
`;

const ButtonSecondaryStyled = styled(ButtonAccent)`
  margin: 100px auto 0;
`;

const InputStyled = styled(Input)`
  width: 100%;
  margin-bottom: 12px;
`;

interface Props {
  title: string;
}

export const EmailScreen: React.FC<Props> = ({ title }) => {
  const theme = useTheme();
  const backgroundImage = theme.appTheme.app.background.backgroundImage;

  const [value, changeValue] = useState("");

  return (
    <SRoot>
      <Container url={backgroundImage.url}>
        <ProgressBar value={10} sx={{ marginBottom: "20px" }} />
        <ImageStyled src={imageSrc} alt="image" />

        <TitleStyled
          align="center"
          variant="h5"
          colorVariant="heading"
          background={backgroundImage.color}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </TitleStyled>
        <Typography
          align="center"
          background={backgroundImage.color}
          colorVariant="body"
        >
          Share your email so you don't lose all your information
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={300}
          alignItems="center"
          justifyContent="center"
          margin="0 auto"
        >
          <InputStyled
            placeholder="email"
            value={value}
            onChange={(e) => changeValue(e.target.value)}
          />
          <Typography
            variant="caption"
            textAlign="center"
            background={backgroundImage.color}
            colorVariant="secondary"
          >
            *Nebula does not share any personal information. We'll email you a
            copy of your program for convenient access.
          </Typography>
        </Box>

        <ButtonSecondaryStyled>Continue</ButtonSecondaryStyled>
      </Container>
    </SRoot>
  );
};
