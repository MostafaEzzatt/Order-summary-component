const theme = {
  colors: {
    orange: "hsl(26, 100%, 55%)",
    paleOrange: "hsl(25, 100%, 94%)",
    veryVarkBlue: "hsl(220, 13%, 13%)",
    darkGrayishBlue: "hsl(219, 9%, 45%)",
    grayishBlue: "hsl(220, 14%, 75%)",
    lightGrayishBlue: "hsl(223, 64%, 98%)",
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
  },
  typo: {
    fontSize: 16,
  },
  sizeUnite: {
    rem: (size) => {
      return `${size / theme.typo.fontSize}rem`;
    },
    em: (size) => {
      return `${size / theme.typo.fontSize}em`;
    },
    twoRem: (first, second) => {
      return `${first / theme.typo.fontSize}rem ${
        second / theme.typo.fontSize
      }rem`;
    },
  },
  breakPoints: {
    mobile: "375px",
    medium: "1000px",
  },
};

export default theme;
