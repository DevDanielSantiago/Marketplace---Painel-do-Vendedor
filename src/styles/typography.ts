export const typography = {
  title: {
    large: "font-dm-sans text-title-lg text-gray-500",
    medium: "font-dm-sans text-title-md text-gray-500",
    small: "font-dm-sans text-title-sm text-gray-500",
  },

  subtitle: "font-poppins text-subtitle text-gray-400",

  body: {
    medium: "font-poppins text-body-md text-gray-400",
    small: "font-poppins text-body-sm text-gray-400",
    xs: "font-poppins text-body-xs text-gray-300",
  },

  label: {
    medium: "font-poppins text-label-md text-gray-400 uppercase",
    small: "font-poppins text-label-sm text-gray-300 uppercase",
  },

  action: {
    medium: "font-poppins text-action-md text-gray-500",
    small: "font-poppins text-action-sm text-gray-400",
  },
} as const;
