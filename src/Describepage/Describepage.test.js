import React from 'react';
import ReactDOM from 'react-dom';
import Describepage from './Describepage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Describepage />, div);
  ReactDOM.unmountComponentAtNode(div);
});