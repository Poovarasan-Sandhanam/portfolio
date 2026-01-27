import React from 'react';
import '../styles/Achievements.css';
import { achievements } from '../data';
import { FaTrophy, FaUsers, FaServer, FaChartLine } from 'react-icons/fa';

const iconMap = {
    0: FaTrophy,
    1: FaUsers,
    2: FaServer,
    3: FaChartLine
};

const Achievements = () => {
    return (
        <section className="achievements-section" id="achievements" aria-label="Key Achievements Section">
            <h2 className="achievements-heading">Key Achievements</h2>

            <div className="achievements-grid">
                {achievements.map((item, index) => {
                    const Icon = iconMap[index] || FaTrophy;
                    return (
                        <div className="achievement-card" key={index}>
                            <div className="achievement-icon-wrapper">
                                <Icon className="achievement-icon" />
                            </div>
                            <h3 className="achievement-title">{item.title}</h3>
                            <p className="achievement-description">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Achievements;
