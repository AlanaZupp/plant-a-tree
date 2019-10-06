//Tests for the buypage component
import React from 'react';
import ReactDOM from 'react-dom';
import Buy from '../components/buypage.component';

//First test, render without crashing
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Buy />, div);
    ReactDOM.unmountComponentAtNode(div);
});
 