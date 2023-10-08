/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

test('renders 404 message', () => {
  const { getByText } = render(<NotFoundPage />);

  const titleElement = getByText(/404/i);
  const notFoundMessageElement = getByText(/Page Not Found/i);

  expect(titleElement).toBeInTheDocument();
  expect(notFoundMessageElement).toBeInTheDocument();
});
