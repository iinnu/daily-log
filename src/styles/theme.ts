const colors = {
  primary: '#384B60',
  white: '#ffffff',
  border: '#D8D8D8',
};

const fontSize = {
  title: 20,
  subTitle: 16,
  text: 14,
};

const theme = {
  colors,
  fontSize,
};

export type Colors = typeof colors;
export type FontSize = typeof fontSize;
export type Theme = typeof theme;

export default theme;
