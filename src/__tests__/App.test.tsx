import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  test('should render', () => {
    // exercise
    const result = render(<App />);

    // post-conditions
    expect(result).toMatchSnapshot();
  });
});
