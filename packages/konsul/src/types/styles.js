export type BoxStyle = null | {
  padding?: string,
  margin?: string,
  textShadow?: string,
  boxShadow?: string,
  background?: string,
  backgroundColor?: string,
  backgroundImage?: string,
  backgroundPosition?: string,
  backgroundSize?: string
}

export type TextStyle = null | BoxStyle & {
  fontSize?: string,
  lineHeight?: string | number,
  fontFamily?: string,
  color?: string
};

export type ImageStyle = null | BoxStyle & {
  width?: number,
  height?: number
};
