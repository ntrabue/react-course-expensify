import React from 'react';
import { shallow } from 'enzyme';
import notFound from '../../components/404Page';

test('should render Expense Dashboard page', () => {
  const wrapper = shallow(<notFound />);
  expect(wrapper).toMatchSnapshot();
});
