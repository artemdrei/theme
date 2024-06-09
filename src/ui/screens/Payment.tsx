import React from "react";
import { styled, useTheme } from "@mui/material";

import { ButtonSuccess } from "../components/Button";
import { Typography } from "../components/Typography";
import { Divider } from "../components/Divider";

interface Props {}

const SRoot = styled("div")`
  width: 100%;
  background: ${({ theme }) => theme.appTheme.app.background.primary};
`;

const Container = styled("div")`
  height: 100%;
  margin: 0 auto;
  padding: 32px;
`;

const ButtonSecondaryStyled = styled(ButtonSuccess)`
  margin: 40px auto 0;
`;

const DividerStyled = styled(Divider)`
  margin: 40px;
`;

const PaymentBoxStyled = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.appTheme.app.gradients.tertiary};
  border-radius: 8px;
  padding: 4px 8px;
  margin-top: 20px;
`;

export const PaymentScreen: React.FC<Props> = () => {
  const theme = useTheme();
  const backgroundColor = theme.appTheme.app.background.primary;

  return (
    <SRoot>
      <Container>
        <Typography
          variant="h5"
          textAlign="center"
          background={backgroundColor}
          colorVariant="heading"
        >
          🎉️️️️️️
        </Typography>
        <Typography
          variant="h5"
          textAlign="center"
          background={backgroundColor}
          colorVariant="heading"
        >
          ️️️️️ You get a secret discount!
        </Typography>

        <Typography
          variant="h6"
          fontWeight={400}
          textAlign="center"
          background={backgroundColor}
          colorVariant="heading"
        >
          Start your 7-day trial
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          background={backgroundColor}
          colorVariant="heading"
        >
          No pressure. Cancel anytime.
        </Typography>

        <PaymentBoxStyled>
          <Typography colorVariant="heading" background={backgroundColor}>
            🎉️️️️️️
          </Typography>
          <Typography colorVariant="heading" background={backgroundColor}>
            Secret discount applied!
          </Typography>
          <Typography
            colorVariant="body"
            fontWeight={700}
            background={backgroundColor}
          >
            -65%
          </Typography>
        </PaymentBoxStyled>

        <DividerStyled />

        <ButtonSecondaryStyled>Continue</ButtonSecondaryStyled>
      </Container>
    </SRoot>
  );
};
