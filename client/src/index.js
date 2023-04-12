import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/root.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/*" element={<App/>}/>
  </Routes>
  </BrowserRouter>
);