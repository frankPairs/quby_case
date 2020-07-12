import React from 'react';

import { ThermostatView } from './features/thermostat';
import { AppStyled, ContentStyled, HeaderStyled } from './App.styled';

function App() {
  return (
    <AppStyled>
      <HeaderStyled>
        <h1>Quby Thermostat</h1>
      </HeaderStyled>
      <ContentStyled>
        <ThermostatView />
      </ContentStyled>
    </AppStyled>
  );
}

export { App };
