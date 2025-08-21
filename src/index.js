import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContent from './App'; // updated import
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContent /> {/* updated component */}
  </React.StrictMode>
);

reportWebVitals();
