const getMediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

const BreakPoints = {
  xs: getMediaQuery(0),
  sm: getMediaQuery(576),
  md: getMediaQuery(768),
  lg: getMediaQuery(992),
  xl: getMediaQuery(1200),
} as const;

export default BreakPoints;
