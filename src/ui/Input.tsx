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
  font-size: ${({ theme }) => theme.appTheme.typography.select.fontSize};
  font-weight: ${({ theme }) => theme.appTheme.typography.select.fontWeight};
  border: 1px solid ${({ theme }) => theme.appTheme.component.inputBorderColor};
  background: ${({ theme }) => theme.appTheme.component.inputBackground};

  &:focus {
    border: 1px solid
      ${({ theme }) => theme.appTheme.component.inputBorderColorActive};
    outline: none;
  }

  &:disabled {
    border: 1px solid
      ${({ theme }) => theme.appTheme.component.inputBorderColorDisabled};
    background-color: ${({ theme }) =>
      theme.appTheme.component.inputBackgroundDisabled};
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
