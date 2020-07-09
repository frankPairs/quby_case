import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

function domLoaded(evt: Event) {
  const doc = evt.target as Document;
  const rootEl = doc.getElementById('root');

  if (!rootEl) {
    return;
  }

  render(<App />, rootEl);
}

document.addEventListener('DOMContentLoaded', domLoaded);
