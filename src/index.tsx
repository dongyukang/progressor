import React from 'react';
import './public/css/app.css';
import ReactDOM from 'react-dom';
import App from './components/App';

require('dotenv').config();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
