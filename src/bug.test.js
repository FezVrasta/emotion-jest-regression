import React from 'react';
import { mount } from 'enzyme';
import { Foo, Bar } from './bug';

it('child style to be read by toHaveStyleRule', () => {
  expect(mount(<Foo />)).toMatchSnapshot();
  expect(mount(<Foo />).find(Bar)).toHaveStyleRule('color', 'yellow');
});
