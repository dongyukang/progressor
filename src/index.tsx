import React from 'react';
import './public/css/app.css';
import ReactDOM from 'react-dom';
import App from './components/App';

let firebase = require('firebase');
require('firebase/firestore');

let firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID 
}

require('dotenv').config();

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
