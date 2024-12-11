import './bootstrap';
import React from 'react';
import AppRoutes from './AppRoutes';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';       

const App = () => {
    return (
        <>
            <Navbar />
            <AppRoutes />
        </>
    );
};

const rootElement = document.getElementById('root'); 
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}