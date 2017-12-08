
/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/header';

describe('testing Index page component', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });
});
