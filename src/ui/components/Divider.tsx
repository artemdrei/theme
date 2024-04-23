import { styled, Divider as MuiDivider } from "@mui/material";
import React from "react";

interface Props {}

const DividerStyled = styled(MuiDivider)`
  background-color: ${({ theme }) =>
    theme.appTheme.components.dividerBackground};
`;

export const Divider: React.FC<Props> = (props) => {
  return <DividerStyled {...props} />;
};
