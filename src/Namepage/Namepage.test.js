import React from 'react';
import ReactDOM from 'react-dom';
import Namepage from './Namepage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Namepage />, div);
  ReactDOM.unmountComponentAtNode(div);
});