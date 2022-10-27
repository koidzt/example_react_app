import React from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Exercise1 from './pages/exercise1';
import Exercise2 from './pages/exercise2';
import Exercise3 from './pages/exercise3';
import Exercise4 from './pages/exercise4';
import Exercise5 from './pages/exercise5';
import Exercise6 from './pages/exercise6';
import Exercise7 from './pages/exercise7';
import Exercise8 from './pages/exercise8';
import Exercise9 from './pages/exercise9';
import Exercise10 from './pages/exercise10';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise-1" element={<Exercise1 />} />
        <Route path="/exercise-2" element={<Exercise2 />} />
        <Route path="/exercise-3" element={<Exercise3 />} />
        <Route path="/exercise-4" element={<Exercise4 />} />
        <Route path="/exercise-5" element={<Exercise5 />} />
        <Route path="/exercise-6" element={<Exercise6 />} />
        <Route path="/exercise-7" element={<Exercise7 />} />
        <Route path="/exercise-8" element={<Exercise8 />} />
        <Route path="/exercise-9" element={<Exercise9 />} />
        <Route path="/exercise-10" element={<Exercise10 />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
