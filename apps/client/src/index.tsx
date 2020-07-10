import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './styles';
import { App } from './App';

function domLoaded(evt: Event) {
  const doc = evt.target as Document;
  const rootEl = doc.getElementById('root');

  if (!rootEl) {
    return;
  }

  render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>,
    rootEl,
  );
}

document.addEventListener('DOMContentLoaded', domLoaded);
