import React from 'react';
import { render } from 'react-dom';

import { GlobalStyle } from './styles';
import { App } from './App';

function domLoaded(evt: Event) {
  const doc = evt.target as Document;
  const rootEl = doc.getElementById('root');

  if (!rootEl) {
    return;
  }

  render(
    <>
      <GlobalStyle />
      <App />
    </>,
    rootEl,
  );
}

document.addEventListener('DOMContentLoaded', domLoaded);
