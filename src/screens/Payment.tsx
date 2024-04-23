import React from "react";
import { styled, useTheme } from "@mui/material";

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
  const theme = useTheme();
  const backgroundColor = theme.appTheme.app.background.primary;

  return (
    <SRoot>
      <Container>
        <Typography
          variant="h5"
          color="heading"
          textAlign="center"
          background={backgroundColor}
        >
          🎉️️️️️️
        </Typography>
        <Typography
          variant="h5"
          color="heading"
          textAlign="center"
          background={backgroundColor}
        >
          ️️️️️ You get a secret discount!
        </Typography>

        <Typography
          variant="h6"
          color="heading"
          fontWeight={400}
          textAlign="center"
          background={backgroundColor}
        >
          Start your 7-day trial
        </Typography>
        <Typography
          variant="subtitle2"
          color="heading"
          fontWeight={400}
          textAlign="center"
          background={backgroundColor}
        >
          No pressure. Cancel anytime.
        </Typography>

        <PaymentBoxStyled>
          <Typography color="heading" background={backgroundColor}>
            🎉️️️️️️
          </Typography>
          <Typography color="heading" background={backgroundColor}>
            Secret discount applied!
          </Typography>
          <Typography
            color="body"
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
