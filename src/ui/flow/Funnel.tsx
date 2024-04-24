import React from "react";

import { EmailScreen } from "../screens/Email";
import { OnboardingScreen } from "../screens/Onboarding";
import { PaymentScreen } from "../screens/Payment";

interface Props {
  title: string;
}

export const Funnel: React.FC<Props> = ({ title }) => {
  return (
    <>
      <EmailScreen title={title} />
      <OnboardingScreen />
      <PaymentScreen />
    </>
  );
};
