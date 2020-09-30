// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Target HTML where content will be injected
const appRoot = document.getElementById('app-root');

ReactDOM.render(<App />, appRoot);
