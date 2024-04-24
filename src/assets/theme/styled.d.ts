import { defaultTheme } from "./defaultTheme";

export type AppTheme = { appTheme: typeof defaultTheme };

declare module "@mui/material/styles" {
  interface Theme extends AppTheme {}
  interface ThemeOptions extends AppTheme {}
}
