import React from 'react';
import { render, cleanup } from '@testing-library/react';
const Item = require('..');


describe('Item', () => {
    afterEach(cleanup);
  
    const i18n = { gettext: text => text };
  
    test('should render correctly', () => {
      const { asFragment } = render(<Item i18n={i18n} items={'items'} />);
  
      expect(asFragment()).toMatchSnapshot();
    });
  });
  