/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-import-module-exports */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { jest } from '@jest/globals';

jest.useFakeTimers();

module.exports = async () => ({
  verbose: true,
});
