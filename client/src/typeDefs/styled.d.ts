import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      desktop: string;
      desktopSmall: string;
      tablet: string;
      mobile: string;
    };

    colors: {
      primary: string;
      secondary: string;
    };
  }
}
