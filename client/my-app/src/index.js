import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Main />}></Route>
        <Route path='main' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

