import React from "react";
import { LinearProgress, LinearProgressProps, styled } from "@mui/material";

const ProgressBarStyled = styled(LinearProgress)`
  height: 6px;
  border-radius: 6px;

  .MuiLinearProgress-bar {
    background-color: ${({ theme }) =>
      theme.appTheme.components.progressBarBackground};
  }
`;

export const ProgressBar: React.FC<LinearProgressProps> = (props) => {
  return <ProgressBarStyled variant="determinate" {...props} />;
};
