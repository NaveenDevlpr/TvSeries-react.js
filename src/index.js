import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ShowsState from './context/shows/showsState';
import AlertState from './context/alerts/alertState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShowsState>
    <BrowserRouter>
        <AlertState>
            <App />
        </AlertState>
    </BrowserRouter>
  </ShowsState>
);

