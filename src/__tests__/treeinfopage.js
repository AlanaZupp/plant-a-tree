//Tests for the treeinfopage component
import React from 'react';
import ReactDOM from 'react-dom';
import Info from '../components/treeinfopage.component';
import { trees } from "../components/tree.js";

//First test, render without crashing (issues with models, but passes)
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Info />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//Check import of tree objects at correct length
it('Check Tree length',()=>{
    expect(trees.length).toBe(10);
});
 
 