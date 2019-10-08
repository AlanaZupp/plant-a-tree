//Tests for the homepage component
import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/homepage.component.js';

//First test, render without crashing
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
//Adding comment for Acceptance Tests