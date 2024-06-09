import { lightTheme } from "./lightTheme";

export type AppTheme = { appTheme: typeof lightTheme };

declare module "@mui/material/styles" {
  interface Theme extends AppTheme {}
  interface ThemeOptions extends AppTheme {}
}
