import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';     
import Course from './components/Courses';
import Home from './components/Home';

const basename = import.meta.env.VITE_BASENAME || '';

const AppRoutes = () => {
    return (
        <Router basename={basename}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recommendation" element={<Course />} />
            </Routes>
        </Router>
    )
};

export default AppRoutes;