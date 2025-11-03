import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Courses } from './pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
