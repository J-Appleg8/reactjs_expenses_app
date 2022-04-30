import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// createRoot() Creates the main entry point - or hook - of the overall UI
// - Tells react where the react app that you built should be placed on the webpage
// Then we store that root object to a variable and call the render() method to tell react
// what should be rendered in that div element that we selected

// App is a component that we render in place of the div element that has the id of 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
