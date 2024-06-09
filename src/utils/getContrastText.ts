const hexToRgb = (hex: string) => {
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((hex) => hex + hex)
      .join("");
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
};

const yiqFromRgb = (r: number, g: number, b: number) => {
  return (r * 299 + g * 587 + b * 114) / 1000;
};

const getHexColorFromGradient = (gradient: string): string[] => {
  const colorRegex = /#([0-9a-fA-F]{3,6})/g;
  const colors = [];
  let match;

  while ((match = colorRegex.exec(gradient)) !== null) {
    colors.push(match[1]);
  }

  return colors;
};

export const getContrastColor = function (color: string) {
  let colors: string[] = [];

  if (
    color.startsWith("linear-gradient") ||
    color.startsWith("radial-gradient")
  ) {
    colors = getHexColorFromGradient(color);
  } else {
    if (color.startsWith("#")) {
      color = color.slice(1);
    }
    colors = [color];
  }

  const yiqValues = colors
    .map(hexToRgb)
    .map(([r, g, b]) => yiqFromRgb(r, g, b));
  const avgYiq =
    yiqValues.reduce((acc, yiq) => acc + yiq, 0) / yiqValues.length;

  return avgYiq >= 128 ? "dark" : "light";
};
