// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './Indecision-App';

// Target HTML where content will be injected
const appRoot = document.getElementById('app-root');

ReactDOM.render(<IndecisionApp />, appRoot);
