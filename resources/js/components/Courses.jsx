import Library from '/public/images/Library.jpg';
import '/resources/css/course.css'; 
import React, { useState } from 'react';
import {Button} from 'react-aria-components';

// Roadmap data -- This will be the API Output -- update to a json file for testing?
const roadmaps = [
    {
        name: 'Roadmap 1',
        students: 137,
        years: [
            {
                year: 1,
                semesters: [
                    {
                        name: 'Fall',
                        courses: [
                            { name: 'Course 1', units: 3 },
                            { name: 'Course 2', units: 3 },
                            { name: 'Course 3', units: 4 },
                            { name: 'Course 4', units: 3 },
                            { name: 'Course 5', units: 3 },
                        ],
                    },
                    {
                        name: 'Spring',
                        courses: [
                            { name: 'Course 1', units: 3 },
                            { name: 'Course 2', units: 3 },
                            { name: 'Course 3', units: 4 },
                            { name: 'Course 4', units: 3 },
                            { name: 'Course 5', units: 3 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Roadmap 2',
        students: 90,
        years: [
            {
                year: 1,
                semesters: [
                    {
                        name: 'Fall',
                        courses: [
                            { name: 'Course A', units: 3 },
                            { name: 'Course B', units: 3 },
                        ],
                    },
                    {
                        name: 'Spring',
                        courses: [
                            { name: 'Course C', units: 4 },
                            { name: 'Course D', units: 3 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Roadmap 3',
        students: 45,
        years: [
            {
                year: 1,
                semesters: [
                    {
                        name: 'Fall',
                        courses: [
                            { name: 'Course X', units: 3 },
                            { name: 'Course Y', units: 4 },
                        ],
                    },
                ],
            },
        ],
    },
];

const Course = () => {
    const [selectedRoadmap, setSelectedRoadmap] = useState(0); // Track active roadmap

    const handleTabChange = (index) => {
        setSelectedRoadmap(index);
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
            <article>
                <nav className="nav-tabs">
                    <ul className="nav-tabs__list">
                        {roadmaps.map((roadmap, index) => (
                            <li key={index}>
                                <Button
                                    className={`nav-tabs__link ${selectedRoadmap === index ? 'nav-tabs__link--active' : ''}`}
                                    onPress={() => handleTabChange(index)}
                                    style={{ border: 'none', background: 'none' }}

                                >
                                    {roadmap.name}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Respective roadmap data */}
                <div className="roadmap">
                    <header className="roadmap__header">
                        <h1 className="roadmap__heading">{roadmaps[selectedRoadmap].name}</h1>
                        <p>{roadmaps[selectedRoadmap].students} students have taken a similar roadmap.</p>
                    </header>

                    <div className="roadmap__grid">
                        {roadmaps[selectedRoadmap].years.map((year, yearIndex) => (
                            <section key={yearIndex} className="roadmap__year">
                                <h2 className="roadmap__year-heading">Year {year.year}</h2>
                                {year.semesters.map((semester, semesterIndex) => (
                                    <section key={semesterIndex} className="roadmap__semester">
                                        <h3 className="roadmap__semester-heading">{semester.name}</h3>
                                        <table
                                            className="roadmap__courses"
                                            aria-label={`Course Table, ${semester.name}, Year ${year.year}`}
                                        >
                                            <thead className="roadmap__courses-header">
                                                <tr>
                                                    <th className="roadmap__courses-heading" scope="col">Course</th>
                                                    <th className="roadmap__courses-heading" scope="col">Units</th>
                                                </tr>
                                            </thead>
                                            <tbody className="roadmap__courses-body">
                                                {semester.courses.map((course, courseIndex) => (
                                                    <tr key={courseIndex}>
                                                        <td className="roadmap__courses-cell">{course.name}</td>
                                                        <td className="roadmap__courses-cell" data-label="Units">{course.units}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot className="roadmap__courses-footer">
                                                <tr>
                                                    <th className="roadmap__courses-total" scope="row">Total</th>
                                                    <th className="roadmap__courses-total">
                                                        {semester.courses.reduce((sum, course) => sum + course.units, 0)}
                                                    </th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </section>
                                ))}
                            </section>
                        ))}
                    </div>
                </div>
            </article>
        </>
    );
};

export default Course;