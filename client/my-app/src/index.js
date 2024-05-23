import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from './Main'
import Service from './Service'
import Review from './Review'
import Sign from './Sign'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to="main" />} />
        <Route path='main' element={<Main />} />
        <Route path='service' element={<Service />} />
        <Route path='review' element={<Review />} />
        <Route path='sign' element={<Sign />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);