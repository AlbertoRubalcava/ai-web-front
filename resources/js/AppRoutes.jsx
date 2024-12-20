import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';     
import Course from './components/Courses';
import Home from './components/Home';

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recommendation" element={<Course />} />
            </Routes>
    )
};

export default AppRoutes;