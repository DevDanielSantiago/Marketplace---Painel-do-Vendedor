export const colors = {
  orange: {
    base: "#F24D0D",
    dark: "#C43C08",
  },
  blue: {
    light: "#D7EFF9",
    base: "#5EC5FD",
    dark: "#009CF0",
  },
  shape: {
    white: "#FFFFFF",
    background: "#FBF4F4",
    shape: "#F5EAEA",
  },
  gray: {
    100: "#ADADAD",
    200: "#949494",
    300: "#666666",
    400: "#3D3D3D",
    500: "#1D1D1D",
  },
  semantic: {
    danger: "#DC3545",
    success: "#28A745",
  },
} as const;

export type ColorKeys = keyof typeof colors;
