import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.js';

test('renders without crashing', () => {
  const component = renderer.create(
    <Header />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
