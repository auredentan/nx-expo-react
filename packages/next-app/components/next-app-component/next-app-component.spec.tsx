import { render } from '@testing-library/react';

import NextAppComponent from './next-app-component';

describe('NextAppComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextAppComponent />);
    expect(baseElement).toBeTruthy();
  });
});
