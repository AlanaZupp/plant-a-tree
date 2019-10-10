//Tests for the treeinfopage component
import React from 'react';
import ReactDOM from 'react-dom';
import Info from '../components/toolPage.component';
import { tools } from "../components/tool.js";

//First test, render without crashing (issues with models, but passes)
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Info />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//Check import of tool objects at correct length
it('Check tool length',()=>{
    expect(tools.length).toBe(5);
});
 
 