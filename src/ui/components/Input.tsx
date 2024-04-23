import { styled } from "@mui/material";

interface InputProps {
  placeholder?: string;
  value: string;
  type?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputStyled = styled("input")<InputProps>`
  padding: 10px;
  border-radius: 4px;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.appTheme.components.inputFontSize};
  font-weight: ${({ theme }) => theme.appTheme.components.inputFontWeight};
  border: 1px solid ${({ theme }) => theme.appTheme.components.inputBorderColor};
  background: ${({ theme }) => theme.appTheme.components.inputBackground};

  &:focus {
    border: 1px solid
      ${({ theme }) => theme.appTheme.components.inputBorderColorActive};
    outline: none;
  }

  &:disabled {
    border: 1px solid
      ${({ theme }) => theme.appTheme.components.inputBorderColorDisabled};
    background-color: ${({ theme }) =>
      theme.appTheme.components.inputBackgroundDisabled};
  }
`;

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  ...props
}) => {
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};
