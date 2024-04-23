import { AppTheme } from "./theme";

declare module "@mui/material/styles" {
  interface Theme extends AppTheme {}
  interface ThemeOptions extends AppTheme {}
}
