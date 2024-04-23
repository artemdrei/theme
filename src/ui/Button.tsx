import { styled } from "@mui/material";

interface ButtonProps {
  bgColor?: string;
  color?: string;
  fontSize?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const ButtonStyled = styled("button")<ButtonProps>`
  display: block;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) =>
    theme.appTheme.component.buttonPrimaryBackground};
  color: ${({ theme }) => theme.appTheme.component.buttonPrimaryTextColor};
  box-shadow: ${({ theme }) => theme.appTheme.component.buttonPrimaryBoxShadow};
  font-size: ${({ theme }) => theme.appTheme.typography.button.fontSize};
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
  font-weight: ${({ theme }) => theme.appTheme.typography.button.fontWeight};

  :hover:enabled {
    cursor: pointer;
    background: ${({ theme }) =>
      theme.appTheme.component.buttonPrimaryBackgroundHover};
  }

  :active:enabled {
    background: ${({ theme }) =>
      theme.appTheme.component.buttonPrimaryBackgroundActive};
  }

  :disabled {
    background: ${({ theme }) =>
      theme.appTheme.component.buttonPrimaryBackgroundDisabled};
  }
`;

const ButtonSecondaryStyled = styled("button")<ButtonProps>`
  display: block;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) =>
    theme.appTheme.component.buttonSecondaryBackground};
  color: ${({ theme }) => theme.appTheme.component.buttonSecondaryTextColor};
  box-shadow: ${({ theme }) =>
    theme.appTheme.component.buttonSecondaryBoxShadow};
  font-size: ${({ theme }) => theme.appTheme.typography.button.fontSize};
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
  font-weight: ${({ theme }) => theme.appTheme.typography.button.fontWeight};

  &:hover:enabled {
    cursor: pointer;
    background: ${({ theme }) =>
      theme.appTheme.component.buttonSecondaryBackgroundHover};
  }

  &:active:enabled {
    background: ${({ theme }) =>
      theme.appTheme.component.buttonSecondaryBackgroundActive};
  }

  :disabled {
    background: ${({ theme }) =>
      theme.appTheme.component.buttonPrimaryBackgroundDisabled};
  }
`;

const ButtonSuccessStyled = styled("button")<ButtonProps>`
  display: block;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) =>
    theme.appTheme.component.buttonSuccessBackground};
  color: ${({ theme }) => theme.appTheme.component.buttonSuccessTextColor};
  box-shadow: ${({ theme }) => theme.appTheme.component.buttonSuccessBoxShadow};
  font-size: ${({ theme }) => theme.appTheme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.appTheme.typography.button.fontWeight};

  &:hover:enabled {
    cursor: pointer;
    background: ${({ theme }) =>
      theme.appTheme.component.buttonSuccessBackgroundHover};
  }

  &:active:enabled {
    background: ${({ theme }) =>
      theme.appTheme.component.buttonSuccessBackgroundActive};
  }

  :disabled {
    background: ${({ theme }) =>
      theme.appTheme.component.buttonSuccessBackgroundDisabled};
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
