import { DefaultTheme } from 'styled-components';

const colors = {
  primary: '#384B60',
  white: '#ffffff',
  black: '#352F44',
  border: '#D8D8D8',
};

const fontSize = {
  title: 25,
  subTitle: 18,
  text: 14,
};

const fontWeight = {
  regular: 300,
  medium: 500,
  semiBold: 700,
  bold: 900,
};

const theme: DefaultTheme = {
  colors,
  fontSize,
  fontWeight,
};

export type Colors = typeof colors;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;

export default theme;
