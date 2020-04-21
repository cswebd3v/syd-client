import React from 'react';
import ReactDOM from 'react-dom';
import Facepage from './Facepage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Facepage />, div);
  ReactDOM.unmountComponentAtNode(div);
});