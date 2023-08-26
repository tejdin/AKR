import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h4>AKR SMART</h4>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">A propos</a></li>
                        <li><a href="#">Nos Services</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

