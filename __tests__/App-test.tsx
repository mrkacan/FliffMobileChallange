import 'react-native';
import React from 'react';
import App from '../src/App';
import {act, fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

it('renders app correctly', async () => {
  jest.useFakeTimers();
  const {queryByTestId} = render(<App />);

  const title = queryByTestId('loginWelcomeText');

  expect(title).toBeDefined();
  expect(title).toHaveTextContent('To get started, first enter your @username');
});

it('check when put "admin to login input and press login button it should show error message"', async () => {
  jest.useFakeTimers();
  const {getByTestId, queryByTestId} = render(<App />);
  const input = getByTestId('loginInput');
  const button = getByTestId('loginButton');

  expect(input).toBeDefined();
  expect(button).toBeDefined();

  await act(async () => {
    await fireEvent.changeText(input, 'admin');
    await fireEvent.press(button);
    const title = queryByTestId('loginErrorText');
    expect(title).toHaveTextContent(
      'Usernames containing "Twitter" or "Admin" cannot be claimed.',
    );
  });
});

it('check when put "mrkacan to login input and press button" it should navigate to home screen', async () => {
  jest.useFakeTimers();
  const {getByTestId, queryByTestId} = render(<App />);
  const input = getByTestId('loginInput');
  const button = getByTestId('loginButton');

  expect(input).toBeDefined();
  expect(button).toBeDefined();

  await act(async () => {
    await fireEvent.changeText(input, 'mrkacan');
    await fireEvent.press(button);
    const title = queryByTestId('homeScreen');
    expect(title).toBeDefined();
  });
});
