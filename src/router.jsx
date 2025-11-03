
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Courses from './pages/Courses';
import TestSeries from './pages/TestSeries';
import CompetativeExams from './pages/CompetativeExams';
import Quiz from './pages/Quiz';
import TestCompleted from './pages/TestCompleted';
import Analytics from './pages/Analytics';

const Router = () => (
  <BrowserRouter>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/test-series" element={<TestSeries />} />
  <Route path="/competative_Exams" element={<CompetativeExams />} />
  <Route path="/quiz" element={<Quiz />} />
        <Route path="/test-completed" element={<TestCompleted />} />
        <Route path="/analytics" element={<Analytics />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
