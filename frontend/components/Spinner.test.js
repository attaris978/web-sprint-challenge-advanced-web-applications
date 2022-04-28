// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import Spinner from './Spinner'
import {render, screen, waitFor} from '@testing-library/react';

test('sanity', () => {
  expect(true).toBe(true)
});

test('test that spinner renders without errors', () => {
  render(<Spinner />);
});

// test('test that spinner appears when state is set to true',  () => {
//   render(<Spinner spinnerOn={false} />);
//   expect(screen.queryByText("Please wait...")).not.toBeInTheDocument();
// })
