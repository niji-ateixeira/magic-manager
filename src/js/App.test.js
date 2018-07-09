import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.js';

jest.mock('../logo.svg', () => 'logo');

test('renders without crashing', () => {
  const component = renderer.create(
    <App />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
