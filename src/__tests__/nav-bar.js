
/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../components/nav-bar';

describe('testing Index page component', () => {
  it('should render without crashing', () => {
    shallow(<NavBar />);
  });
});
