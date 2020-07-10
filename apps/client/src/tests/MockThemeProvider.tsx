import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles';

interface Props {
  children: ReactNode;
}

function MockThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { MockThemeProvider };
