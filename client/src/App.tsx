import React from 'react';

import { TempCard, TempEditableCard } from './components/Cards';
import { useThermostat } from './hooks';
import { AppStyled, ContentStyled } from './App.styled';

function App() {
  const { temperature, setpoint, lastUpdateAt } = useThermostat();

  return (
    <AppStyled>
      <ContentStyled>
        <TempCard label="Current" temperature={temperature} lastUpdateAt={lastUpdateAt} />
        <TempEditableCard
          label="Set Point"
          temperature={setpoint}
          lastUpdateAt={lastUpdateAt}
          onChangeTemp={(temp) => console.log(temp)}
        />
      </ContentStyled>
    </AppStyled>
  );
}

export { App };
