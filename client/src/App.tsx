import React from 'react';

import { TempCard, TempEditableCard } from './components/Cards';
import { useThermostat } from './hooks';
import { AppStyled, ContentStyled, HeaderStyled } from './App.styled';

function App() {
  const [{ data }, updateSetpoint] = useThermostat();

  return (
    <AppStyled>
      <HeaderStyled>
        <h1>Quby Thermostat</h1>
      </HeaderStyled>
      <ContentStyled>
        <TempCard label="Current" temperature={data.temperature} lastUpdateAt={data.lastUpdateAt} />
        <TempEditableCard
          label="Set Point"
          temperature={data.setpoint}
          lastUpdateAt={data.lastUpdateAt}
          limits={{ min: 15, max: 25 }}
          onChangeTemp={updateSetpoint}
        />
      </ContentStyled>
    </AppStyled>
  );
}

export { App };
