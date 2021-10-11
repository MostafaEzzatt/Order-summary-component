const theme = {
  light: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      moderateViolet: "hsl(263, 55%, 52%)",
      moderateVioletBorder: "hsl(263deg 40% 63%)",
      veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
      veryDarkBlackishBlue: "hsl(219, 29%, 14%)",
      lightGray: "hsl(0, 0%, 81%)",
      lightGrayishBlue: "hsl(210, 46%, 95%)",
    },
  },
  typography: {
    fontSizePX: "13px",
    fontSize: 13,
  },
  magerments: {
    rem: (size) => {
      return `${size / theme.typography.fontSize}rem`;
    },
    em: (size) => {
      return `${size / theme.typography.fontSize}em`;
    },
  },
  breakPoints: {
    mobile: "1110px",
  },
};

export default theme;
