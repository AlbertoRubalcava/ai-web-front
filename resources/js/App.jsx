import './bootstrap';
import React from 'react';
import AppRoutes from './AppRoutes';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';      
import { BrowserRouter as Router} from 'react-router-dom';   

const basename = import.meta.env.VITE_BASENAME || '';

const App = () => {
    return (
        <Router basename={basename}>
            <Navbar />
            <AppRoutes />
        </Router>
    );
};

const rootElement = document.getElementById('root'); 
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}