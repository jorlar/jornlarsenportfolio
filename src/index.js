import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* Importing the Analytics component from @vercel/analytics/react */
import { Analytics } from "@vercel/analytics/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
