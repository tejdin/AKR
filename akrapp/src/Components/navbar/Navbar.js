import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaUserCog, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';
import {FaCartShopping} from "react-icons/fa6";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const [services, setServices] = useState([]);

    const fetchServices = () => {
        fetch('http://localhost:3500/services')
            .then((response) => response.json())
            .then((data) => setServices(data))
            .catch((error) => console.error('Erreur:', error));
    };

    const logout = () => {
        sessionStorage.removeItem('userId');
        setIsAuthenticated(false);
    };

    useEffect(() => {
        fetchServices();
        console.log(isAuthenticated);
    }, []);

    return (
        <nav className="navbar">
            <h2 className="logo">AKR-SMART</h2>
            <ul className="nav-links">
                <li><Link to="/">Accueil</Link></li>
                <li className="dropdown">
                    <a href="#">Services</a>
                    <ul className="dropdown-content">
                        {services.map((service, index) => (
                            <li key={service.id}>
                                <Link to={`/service/${service.name}`}>{service.name}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">À propos</Link></li>
            </ul>
            <div className="auth-links">
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard">
                            <FaUserCog className="nav-icon" />
                        </Link>
                        <Link to="/messagerie">
                            <FaEnvelope className="nav-icon" />
                        </Link>
                        <Link to="/panier">
                            <FaCartShopping className="nav-icon" />
                        </Link>
                        <Link to="/" onClick={logout}>
                            <FaSignOutAlt className="nav-icon" />
                        </Link>

                    </>
                ) : (
                    <>
                        <Link to="/login">Connexion</Link> / <Link to="/signup">Inscription</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
