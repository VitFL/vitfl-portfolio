export const ucfirst = (text, delimiter = ' ') => text
  .split(delimiter)
  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
  .join(delimiter);
