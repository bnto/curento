// 1. Import dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';

// 2. Create a React element
const element = React.createElement(
    'p', // type of the element to create
    { id: 'hello' }, // properties of the element
    'Hello World!' // content of the element
); // returns a react element

// 3. Render the application
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);

/* NOTE: old way of rendering a react app prior v18: */
// import ReactDOM from 'react-dom';
// ReactDOM.render(element,container);
