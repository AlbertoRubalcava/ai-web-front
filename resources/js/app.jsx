import './bootstrap';
import '../css/course.css';
import '../css/home.css';
import '../css/navbar.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';        
import Course from './components/courses';
import Home from './components/home';

const basename = import.meta.env.VITE_BASENAME || '';

const App = () => {
    return (
        <Router basename={basename}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recommendation" element={<Course />} />
            </Routes>
        </Router>
    );
};

const rootElement = document.getElementById('root'); 
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}