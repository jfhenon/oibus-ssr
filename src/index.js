import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import App components
import { App } from './components/app';

// compile App component in `#app` HTML element
ReactDOM.hydrateRoot( document.getElementById( 'app' ) , <BrowserRouter><App/></BrowserRouter>);
