import { AppTheme } from "../assets/theme/styled";

// NOTE
// This is a chat GPT solution, make own or improve typings
export const mapThemeWithPalette = (theme: AppTheme["appTheme"]) => {
  const { palette, components } = theme;

  const filledTheme: AppTheme["appTheme"] = { ...theme }; // Create a shallow copy of the theme

  // Iterate over each component in the theme object
  Object.entries(components).forEach(([key, value]) => {
    if (typeof value === "string" && (palette as any)[value]) {
      // If the value is a string and exists as a key in the palette, fill it with the corresponding color
      (filledTheme as any).components[key] = (palette as any)[value];
    } else if (typeof value === "object") {
      // If the value is an object, iterate over its properties and fill in the colors
      const filledObject: { [key: string]: string } = {};

      Object.entries(value).forEach(([subKey, subValue]) => {
        if (typeof subValue === "string" && (palette as any)[subValue]) {
          filledObject[subKey] = (palette as any)[subValue];
        } else {
          (filledObject as any)[subKey] = subValue; // Retain the original value if not found in palette
        }
      });
      (filledTheme as any).components[key] = filledObject;
    }
    // If the value is not a string or object, retain it as it is (e.g., numbers, arrays)
  });

  return filledTheme as any as AppTheme["appTheme"];
};
