import React from 'react';
import ReactDOM from 'react-dom';
import Export from './Export';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Export />, div);
  ReactDOM.unmountComponentAtNode(div);
});
