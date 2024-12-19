import React from 'react';
import Library from '/public/images/Library.jpg';
import { useNavigate } from 'react-router-dom';
import '/resources/css/home.css';


const Home = () => {
    const navigate = useNavigate(); 

    const generateClick = () => {
        navigate('/recommendation'); 
    };
    return (
        <>
            <div className="hero-section">
                <img src={Library} alt="Library" className="hero-image" />
                <div className="welcome-text">
                    <h1>Welcome, [Name]!</h1>
                    <p>Plan your degree and take a step towards your success.</p>
                    <p><strong>Major:</strong> [Mathematics]</p>
                    <p><strong>Graduation Year:</strong> [2026]</p>
                </div>
            </div>
            <div className="home-box">
                <div className="course-roadmap">
                    <h2>Course Roadmap Recommendation</h2>
                    <label htmlFor="graduation-semester">Desired Graduation Semester<p id="red">*</p></label>
                    <select id="graduation-semester">
                        <option value="">Select</option>
                        <option value="spring-2026">Spring 2026</option>
                        <option value="fall-2026">Fall 2026</option>
                        <option value="spring-2027">Spring 2027</option>
                        <option value="fall-2027">Fall 2027</option>
                        <option value="spring-2028">Spring 2028</option>
                    </select>
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