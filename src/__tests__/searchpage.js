//Tests for the searchpage component
import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/searchpage.component';

//First test, render without crashing
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
});
