import Homepage from '@pages/Homepage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
