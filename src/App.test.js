import React from 'react';
import App from './App.js';
import renderer from 'react-test-renderer';

jest.mock('./logo.svg', ()=>'logo');

test('renders without crashing', () => {
  const component = renderer.create(
    <App/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
