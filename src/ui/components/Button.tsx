import { styled } from "@mui/material";

interface ButtonProps {
  bgColor?: string;
  color?: string;
  fontSize?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

// Don't copy and past this button code to your project
// This is naive implementation only for researching purpose
const ButtonStyled = styled("button")<ButtonProps>`
  display: block;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) =>
    theme.appTheme.components.buttonPrimaryBackground};
  color: ${({ theme }) => theme.appTheme.components.buttonPrimaryTextColor};
  box-shadow: ${({ theme }) =>
    theme.appTheme.components.buttonPrimaryBoxShadow};
  font-size: ${({ theme }) => theme.appTheme.components.buttonFontSize};
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
  font-weight: ${({ theme }) => theme.appTheme.components.buttonFontWeight};

  :hover:enabled {
    cursor: pointer;
    background: ${({ theme }) =>
      theme.appTheme.components.buttonPrimaryBackgroundHover};
  }

  :active:enabled {
    background: ${({ theme }) =>
      theme.appTheme.components.buttonPrimaryBackgroundActive};
  }

  :disabled {
    background: ${({ theme }) =>
      theme.appTheme.components.buttonPrimaryBackgroundDisabled};
  }
`;

const ButtonSecondaryStyled = styled("button")<ButtonProps>`
  display: block;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) =>
    theme.appTheme.components.buttonSecondaryBackground};
  color: ${({ theme }) => theme.appTheme.components.buttonSecondaryTextColor};
  box-shadow: ${({ theme }) =>
    theme.appTheme.components.buttonSecondaryBoxShadow};
  font-size: ${({ theme }) => theme.appTheme.components.buttonFontSize};
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
  font-weight: ${({ theme }) => theme.appTheme.components.buttonFontWeight};

  &:hover:enabled {
    cursor: pointer;
    background: ${({ theme }) =>
      theme.appTheme.components.buttonSecondaryBackgroundHover};
  }

  &:active:enabled {
    background: ${({ theme }) =>
      theme.appTheme.components.buttonSecondaryBackgroundActive};
  }

  :disabled {
    background: ${({ theme }) =>
      theme.appTheme.components.buttonPrimaryBackgroundDisabled};
  }
`;

const ButtonSuccessStyled = styled("button")<ButtonProps>`
  display: block;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) =>
    theme.appTheme.components.buttonSuccessBackground};
  color: ${({ theme }) => theme.appTheme.components.buttonSuccessTextColor};
  box-shadow: ${({ theme }) =>
    theme.appTheme.components.buttonSuccessBoxShadow};
  font-size: ${({ theme }) => theme.appTheme.components.buttonFontSize};
  font-weight: ${({ theme }) => theme.appTheme.components.buttonFontWeight};

  &:hover:enabled {
    cursor: pointer;
    background: ${({ theme }) =>
      theme.appTheme.components.buttonSuccessBackgroundHover};
  }

  &:active:enabled {
    background: ${({ theme }) =>
      theme.appTheme.components.buttonSuccessBackgroundActive};
  }

  :disabled {
    background: ${({ theme }) =>
      theme.appTheme.components.buttonSuccessBackgroundDisabled};
  }
`;

export const ButtonAccent: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <ButtonStyled onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  );
};

export const ButtonSecondary: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <ButtonSecondaryStyled {...props} onClick={onClick}>
      {children}
    </ButtonSecondaryStyled>
  );
};

export const ButtonSuccess: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <ButtonSuccessStyled onClick={onClick} {...props}>
      {children}
    </ButtonSuccessStyled>
  );
};
