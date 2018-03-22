import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Gallery from './components/Gallery';

test('gallery component', ()=>{
  const component = ReactTestUtils.renderIntoDocument(<Gallery />);
  ReactTestUtils.findRenderedDOMComponentWithTag(component, 'ButtonGroup');
});
