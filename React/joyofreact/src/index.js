// 1. Import dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';

// 2. Create a React element
const element = React.createElement(
    'p', // type of the element to create
    { id: 'hello' }, // properties of the element
    'Hello World!' // content of the element
); // returns a react element

// 003 Create a React element with JSX
const reactelement = (
  <p id="hello">
    Hello React
  </p>
)

// 004 Expression slots - shopping list example
const shopping = ['apple', 'banana', 'carrot'];
const shoppingElement = (
  <p>Items left to purchase: {shopping.length}</p>
)

// 006 Differences JSX vs HTML & JS
const img = 'https://placekitten.com/200/300';
const elementImage = (
  <>
    <label htmlFor="react-for">Text</label>
    <input type="text" id="react-for" />
    <img src={ img } style={{ width: 50 }} className="css-class" />
  </>
)

// 3. Render the application
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);
root.render(reactelement);
root.render(shoppingElement);
// root.render(elementImage);


/* NOTE: old way of rendering a react app prior v18: */
// import ReactDOM from 'react-dom';
// ReactDOM.render(element,container);
