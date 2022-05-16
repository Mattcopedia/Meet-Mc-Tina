import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';   



//we are rendering The App.js file on index.js and linking what the App renders on index.html page using the html id called Root 
// this is saying the App is going to be rendered inside the div element in index.html with An id of root 
ReactDOM.render(<App />, document.getElementById('root'));   
