import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './layout/Header';
import JobsGrid from './pages/JobsGrid';
import JobList from './components/JobList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/job-list" element={<JobList />} />
        <Route path="/jobs-list" element={<JobsGrid />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
