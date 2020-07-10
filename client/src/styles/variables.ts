import { DefaultTheme } from 'styled-components';

const media = {
  desktop: '1800px',
  desktopSmall: '1200px',
  tablet: '768px',
  mobile: '576px',
};

const colors = {
  primary: '#38023b',
  secondary: '#607466',
};

const theme: DefaultTheme = { media, colors };

export { theme };
