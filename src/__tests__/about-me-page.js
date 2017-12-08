
/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import AboutMe from '../pages/about-me';

describe('testing Index page component', () => {
  it('should render without crashing', () => {
    shallow(<AboutMe />);
  });
});

