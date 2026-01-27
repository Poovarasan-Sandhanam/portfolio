import React from 'react';
import '../styles/Education.css';
import { education } from '../data';

const Education = () => {
    return (
        <section className="education-section" id="education" aria-label="Education Section">
            <h2 className="education-heading">Education</h2>

            <div className="education-container">
                {education.map((item, index) => (
                    <div className="education-card" key={index}>
                        <div className="education-icon">🎓</div>
                        <h3 className="education-degree">{item.degree}</h3>
                        <div className="education-institution">{item.institution}</div>
                        <div className="education-location">{item.location}</div>
                        <div className="education-year">{item.year}</div>
                        <p className="education-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
