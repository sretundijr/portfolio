
/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Projects from '../pages/projects';

describe('testing Index page component', () => {
  it('should render without crashing', () => {
    shallow(<Projects />);
  });
});
