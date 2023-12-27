import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import QuotesDataContext from './context/QuotesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuotesDataContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QuotesDataContext>
);
