import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer.js';

test('renders without crashing', () => {
  const component = renderer.create(
    <Footer />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
