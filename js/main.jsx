import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './../sass/main.scss'

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});