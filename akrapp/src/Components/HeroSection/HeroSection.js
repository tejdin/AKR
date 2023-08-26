import React from 'react';
import './HeroSection.css';

const HeroSection = ({ welcomeText, phrase }) => {
    return (
        <div className="hero-section" id="hero-section">
            <div className="hero-text">
                <h3>{welcomeText}</h3>
            </div>
            <div className="hero-phrase">
                <h4>{phrase}</h4>
            </div>
        </div>
    );
};

export default HeroSection;
