import React from 'react';
import Library from '/resources/images/Library.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '/resources/css/home.css';

var baseUrl = '';

if(import.meta.env.VITE_APP_ENV === 'production'){
  baseUrl = import.meta.env.VITE_APP_URL || '';
}

const Home = () => {
    const [selectedSemester, setSelectedSemester] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleDropdownChange = (e) => {
        setSelectedSemester(e.target.value);
    };

    const generateClick = () => {
        if (!selectedSemester) {
            setErrorMessage('Graduation Semester is a required field');
            return;
        }
        // Pass selectedSemester to the next page
        navigate('/recommendation', { state: { selectedSemester } });
    };
    return (
        <>
            <div className="hero-section">
                <img src={baseUrl + Library} alt="Library" className="hero-image" />
                <div className="welcome-text">
                    <h1>Welcome, [Name]!</h1>
                    <p>Plan your degree and take a step towards your success.</p>
                    <p><strong>Major:</strong> [Mathematics]</p>
                    <p><strong>GPA:</strong> [3.6]</p>
                </div>
            </div>
            <div className="home-box">
                <div className="course-roadmap">
                    <h2>Course Roadmap Recommendation</h2>
                    <label htmlFor="graduation-semester">Desired Graduation Semester<p id="red">*</p></label>
                    <select id="graduation-semester" value={selectedSemester} onChange={handleDropdownChange}>
                        <option value="">Select</option>
                        <option value="Fall 2025">Fall 2025</option>
                        <option value="Spring 2026">Spring 2026</option>
                        <option value="Fall 2026">Fall 2026</option>
                        <option value="Spring 2027">Spring 2027</option>
                        <option value="Fall 2027">Fall 2027</option>
                        <option value="Spring 2028">Spring 2028</option>
                    </select>
                    {errorMessage && <span className='errormessage'>{errorMessage}</span>}
                    <button className="generate-button" onClick={generateClick}>Generate my Roadmap</button>
                    
                    <p className="disclaimer">
                        *This is software uses  
                        <a href="https://www.csun.edu/it/academic-technology/artificial-intelligence-ai" className="disclaimer-link">AI</a>
                        . Please check all recommendations.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;