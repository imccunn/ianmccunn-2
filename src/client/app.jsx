import Index from './index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.js'

let body = document.getElementsByTagName('body')[0];
body.style.margin = 0;
ReactDOM.render(
    <Index />,
    document.getElementById('app')
);
