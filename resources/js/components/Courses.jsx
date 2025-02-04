import Library from '/resources/images/Library.jpg';
import '/resources/css/course.css';
import React, { useState } from 'react';
import {Button} from 'react-aria-components';
import { useLocation } from 'react-router-dom';
 
var baseUrl = '';
 
if(import.meta.env.VITE_APP_ENV === 'production'){
  baseUrl = import.meta.env.VITE_APP_URL || '';
}
 
// Roadmap data -- This will be the API Output -- update to a json file for testing?
const roadmaps = [
    {
        name: 'Road Map 1',
        students: 137,
        years: [
            {
                year: 1,
                semesters: [
                    {
                        name: 'Fall 2025',
                        courses: [
                            { name: 'Course 1', units: 3 },
                            { name: 'Course 2', units: 3 },
                            { name: 'Course 3', units: 4 },
                            { name: 'Course 4', units: 3 },
                            { name: 'Course 5', units: 3 },
                        ],
                    },
                    {
                        name: 'Spring 2026',
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
            {
                year: 2,
                semesters: [
                    {
                        name: 'Fall 2026',
                        courses: [
                            { name: 'Course 1', units: 3 },
                            { name: 'Course 2', units: 3 },
                            { name: 'Course 3', units: 4 },
                            { name: 'Course 4', units: 3 },
                            { name: 'Course 5', units: 3 },
                        ],
                    },
                    {
                        name: 'Spring 2027',
                        courses: [
                            { name: 'Course 1', units: 3 },
                            { name: 'Course 2', units: 3 },
                            { name: 'Course 3', units: 4 },
                            { name: 'Course 4', units: 3 },
                            { name: 'Course 5', units: 3 },
                        ],
                    },
                ],
            }
        ],
    },
    {
        name: 'Road Map 2',
        students: 90,
        years: [
            {
                year: 1,
                semesters: [
                    {
                        name: 'Fall 2025',
                        courses: [
                            { name: 'Course X', units: 3 },
                            { name: 'Course Y', units: 3 },
                        ],
                    },
                    {
                        name: 'Spring 2026',
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
        name: 'Road Map 3',
        students: 45,
        years: [
            {
                year: 1,
                semesters: [
                    {
                        name: 'Fall 2025',
                        courses: [
                            { name: 'Course X', units: 3 },
                            { name: 'Course Y', units: 4 },
                        ],
                    },
                    {
                        name: 'Spring 2026',
                        courses: [
                            { name: 'Course C', units: 4 },
                            { name: 'Course D', units: 3 },
                        ],
                    },
                ],
            },
        ],
    },
];
 
const Course = () => {
    const [selectedRoadmap, setSelectedRoadmap] = useState(0);
    const [compareMode, setCompareMode] = useState(false);
    const [compareRoadmaps, setCompareRoadmaps] = useState([0, 1]);
    const [isComparingVisible, setIsComparingVisible] = useState(false);
  
    const handleTabChange = (index) => {
      setSelectedRoadmap(index);
      setCompareMode(false);
    };
  
    const handleCompareRoadmapChange = (index, value) => {
      setCompareRoadmaps((prev) => {
        const updated = [...prev];
        updated[index] = value;
  
        if (updated[0] === updated[1]) {
          updated[1 - index] = prev[1 - index];
        }
  
        return updated;
      });
      setIsComparingVisible(true);
      setTimeout(() => setIsComparingVisible(false), 3500);
    };
  
    const location = useLocation();
    const { selectedSemester } = location.state || {};
  
    return (
      <>
        <div className="container">
          <div className="row hero-section">
            <div className="col-12">
              <img
                src={baseUrl + Library}
                alt="A library interior with bookshelves"
                className="hero-image"
              />
              <div className="welcome-text">
                <h1>Welcome, [Name]!</h1>
                <p>Plan your degree and take a step towards your success.</p>
                <p>
                  <strong>Major:</strong> [Mathematics]
                </p>
                <p>
                  <strong>GPA:</strong> [3.6]
                </p>
                <p>
                  <strong>Desired Graduation Semester:</strong> {selectedSemester}
                </p>
              </div>
            </div>
          </div>
        </div>
        <article>
          <nav className="nav-tabs" role="tablist">
            <ul className="nav-tabs__list">
              {roadmaps.map((roadmap, index) => (
                <li key={index}>
                  <Button
                    className={`nav-tabs__link ${
                      selectedRoadmap === index && !compareMode
                        ? 'nav-tabs__link--active'
                        : ''
                    }`}
                    onPress={() => handleTabChange(index)}
                    aria-selected={selectedRoadmap === index}
                    role="tab"
                    aria-controls={`roadmap-tab-${index}`}
                    style={{ border: 'none', background: 'none' }}
                  >
                    {roadmap.name}
                  </Button>
                </li>
              ))}
              <li>
                <Button
                  className={`nav-tabs__link ${
                    compareMode ? 'nav-tabs__link--active' : ''
                  }`}
                  onPress={() => setCompareMode(true)}
                  role="tab"
                  aria-selected={compareMode}
                  style={{ border: 'none', background: 'none' }}
                >
                  Compare
                </Button>
              </li>
            </ul>
          </nav>
  
          {!compareMode ? (
            <div
              className="roadmap"
              id={`roadmap-tab-${selectedRoadmap}`}
              role="tabpanel"
            >
              <header className="roadmap__header">
                <h1 className="roadmap__heading">{roadmaps[selectedRoadmap].name}</h1>
                <p>
                  {roadmaps[selectedRoadmap].students} students have completed a
                  similar road map.
                </p>
              </header>
  
              <div className="roadmap__grid">
                {roadmaps[selectedRoadmap].years.map((year, yearIndex) => (
                  <section
                    key={yearIndex}
                    className="roadmap__year"
                    aria-label={`Year ${year.year}`}
                  >
                    <h2 className="roadmap__year-heading">Year {year.year}</h2>
                    {year.semesters.map((semester, semesterIndex) => (
                      <section
                        key={semesterIndex}
                        className="roadmap__semester"
                        aria-label={`Semester ${semester.name}`}
                      >
                        <h3 className="roadmap__semester-heading">{semester.name}</h3>
                        <table
                          className="roadmap__courses"
                          aria-label={`Course Table, ${semester.name}, Year ${year.year}`}
                        >
                          <thead className="roadmap__courses-header">
                            <tr>
                              <th className="roadmap__courses-heading" scope="col">
                                Course
                              </th>
                              <th className="roadmap__courses-heading" scope="col">
                                Units
                              </th>
                            </tr>
                          </thead>
                          <tbody className="roadmap__courses-body">
                            {semester.courses.map((course, courseIndex) => (
                              <tr key={courseIndex}>
                                <td className="roadmap__courses-cell">
                                  {course.name}
                                </td>
                                <td
                                  className="roadmap__courses-cell"
                                  data-label="Units"
                                >
                                  {course.units}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot className="roadmap__courses-footer">
                            <tr>
                              <th className="roadmap__courses-total" scope="row">
                                Total
                              </th>
                              <th className="roadmap__courses-total">
                                {semester.courses.reduce(
                                  (sum, course) => sum + course.units,
                                  0
                                )}
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
          ) : (
            <div className="compare-roadmaps">
                <header className="compare-roadmaps__header">
                    <h1 className="compare-roadmaps__heading">Compare Road Maps</h1>
                    <p>Select two road maps to compare:</p>
                </header>
                <div className="compare-roadmaps__selectors">
                    {compareRoadmaps.map((selected, index) => (
                        <select
                            key={index}
                            value={selected}
                            onChange={(e) => handleCompareRoadmapChange(index, parseInt(e.target.value))}
                        >
                        {roadmaps.map((roadmap, roadmapIndex) => (
                            <option key={roadmapIndex} value={roadmapIndex} disabled={roadmapIndex === compareRoadmaps[1 - index]}>
                                {roadmap.name}
                            </option>
                            ))}
                        </select>
                    ))}
                </div>
                    {isComparingVisible && (
                        <div className={`comparison-message fade-in-out`}>
                            <p className="comparing-mobile">
                                Comparing {roadmaps[compareRoadmaps[0]].name} and {roadmaps[compareRoadmaps[1]].name}
                            </p>
                        </div>
                    )}
                    <div className="compare-roadmaps__grid">
                        {compareRoadmaps.map((roadmapIndex, index) => (
                            <section key={index} className="compare-roadmaps__column">
                                <h2>{roadmaps[roadmapIndex].name}</h2>
                                {roadmaps[roadmapIndex].years.map((year, yearIndex) => (
                                    <div key={yearIndex}>
                                        <h3>Year {year.year}</h3>
                                        {year.semesters.map((semester, semesterIndex) => (
                                            <div key={semesterIndex}>
                                                <h4>{semester.name}</h4>
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
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </section>
                        ))}
                    </div>
                </div>
            )}
    </article>
</>
);
};
 
export default Course;
 
 