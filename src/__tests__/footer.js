
/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../components/footer';

describe('testing Index page component', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });
});

