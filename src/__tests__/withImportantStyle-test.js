import React from 'react';
import {mount} from 'enzyme';
import withImportStyle from '../withImportantStyle.js';

var Wrapped = withImportStyle('span');

it('doesn\'t error', () => {
  mount(
    <Wrapped />
  );
});

