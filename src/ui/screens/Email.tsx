import React, { useState } from "react";
import { Box, styled, useTheme } from "@mui/material";

import imageSrc from "../../assets/images/confirm_email.png";
import { ButtonAccent } from "../components/Button";
import { Typography } from "../components/Typography";
import { Input } from "../components/Input";
import { ProgressBar } from "../components/ProgressBar";

const SRoot = styled("div")`
  width: 100%;
  background: ${({ theme }) => theme.appTheme.app.background.primary};
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
  const backgroundColor = theme.appTheme.app.background.primary;

  const [value, changeValue] = useState("");

  return (
    <SRoot>
      <Container>
        <ProgressBar value={10} sx={{ marginBottom: "20px" }} />
        <ImageStyled src={imageSrc} alt="image" />

        <TitleStyled
          align="center"
          color="heading"
          variant="h5"
          background={backgroundColor}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </TitleStyled>
        <Typography color="body" align="center" background={backgroundColor}>
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
            color="secondary"
            variant="caption"
            textAlign="center"
            background={backgroundColor}
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
