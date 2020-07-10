import React, { ComponentProps } from 'react';
import { render, cleanup } from '@testing-library/react';

import { MockThemeProvider } from '../../../tests/MockThemeProvider';
import { TempCard } from './TempCard';

function getWrapper(overrideProps?: Partial<ComponentProps<typeof TempCard>>) {
  return render(
    <MockThemeProvider>
      <TempCard label="test" temperature={10.5} lastUpdateAt={new Date()} {...overrideProps} />
    </MockThemeProvider>,
  );
}
describe('<TempCard />', () => {
  afterEach(cleanup);

  it('should show label', () => {
    const { getByText } = getWrapper({ label: 'Label' });

    getByText('Label');
  });

  it('should show temperature', () => {
    const { getByText } = getWrapper({ temperature: 25.7 });

    getByText('25.7C°');
  });

  it('should show latest update date', () => {
    const { getByText } = getWrapper({ lastUpdateAt: new Date('2020-06-09T00:01:00') });

    getByText('Latest Update: 00:01:00');
  });
});
