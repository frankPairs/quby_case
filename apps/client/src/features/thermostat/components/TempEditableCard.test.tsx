import React, { ComponentProps } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { MockThemeProvider } from '../../../tests/MockThemeProvider';
import { TempEditableCard } from './TempEditableCard';

function getWrapper(overrideProps?: Partial<ComponentProps<typeof TempEditableCard>>) {
  return render(
    <MockThemeProvider>
      <TempEditableCard
        label="test"
        temperature={10.5}
        lastUpdateAt={new Date()}
        limits={{ min: 15, max: 20 }}
        onIncreaseTemp={jest.fn()}
        onDecreaseTemp={jest.fn()}
        onChangeTemp={jest.fn()}
        {...overrideProps}
      />
    </MockThemeProvider>,
  );
}
describe('<TempEditableCard />', () => {
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

  it('should increase the temperature', () => {
    const { getByText, getByTestId } = getWrapper({ temperature: 16 });

    fireEvent.click(getByTestId('increase-button'));

    getByText('16.5C°');
  });

  it('should decrease the temperature', () => {
    const { getByText, getByTestId } = getWrapper({ temperature: 16 });

    fireEvent.click(getByTestId('decrease-button'));

    getByText('15.5C°');
  });
});
