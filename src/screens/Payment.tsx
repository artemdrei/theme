import React from "react";
import { styled } from "@mui/material";

import { ButtonSuccess } from "../ui/Button";
import { Typography } from "../ui/Typography";
import { Divider } from "../ui/Divider";

interface Props {}

const SRoot = styled("div")`
  width: 100%;
  background: ${({ theme }) => theme.appTheme.app.background.primary};
`;

const Container = styled("div")`
  width: 600px;
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
  return (
    <SRoot>
      <Container>
        <Typography variant="h5" textAlign="center">
          🎉️️️️️️
        </Typography>
        <Typography variant="h5" textAlign="center">
          ️️️️️ You get a secret discount!
        </Typography>

        <Typography variant="h6" fontWeight={400} textAlign="center">
          Start your 7-day trial
        </Typography>
        <Typography variant="subtitle2" fontWeight={400} textAlign="center">
          No pressure. Cancel anytime.
        </Typography>

        <PaymentBoxStyled>
          <Typography>🎉️️️️️️</Typography>
          <Typography>Secret discount applied!</Typography>
          <Typography fontWeight={700}>-65%</Typography>
        </PaymentBoxStyled>

        <DividerStyled />

        <ButtonSecondaryStyled>Continue</ButtonSecondaryStyled>
      </Container>
    </SRoot>
  );
};
