import React from "react";

import { EmailScreen } from "../screens/Email";
import { OnboardingScreen } from "../screens/Onboarding";
import { PaymentScreen } from "../screens/Payment";

export const Funnel: React.FC = () => {
  return (
    <>
      <EmailScreen />
      <OnboardingScreen />
      <PaymentScreen />
    </>
  );
};
