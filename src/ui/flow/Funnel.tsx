import React from "react";

import { EmailScreen } from "../screens/Email";
import { OnboardingScreen } from "../screens/Onboarding";
import { PaymentScreen } from "../screens/Payment";
import { Content } from "../../assets/content";

interface Props {
  content: Content;
}

export const Funnel: React.FC<Props> = ({ content }) => {
  return (
    <>
      <EmailScreen content={content} />
      <OnboardingScreen />
      <PaymentScreen />
    </>
  );
};
