import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import LoginForm from "../Components/loginForm/loginForm";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        // Ne redirigez que si l'utilisateur est sur la page de login et que userId est stocké
        if (userId && location.pathname === "/login") {
            navigate('/dashboard');
            window.location.reload(); // Force le rechargement de la page

        }
    }, [location.pathname]); // Ajoutez location.pathname comme dépendance pour ne rediriger que si le chemin change

    return (
        <div>
            <HeroSection welcomeText="Bienvenue sur AKR SMART" phrase="Connectez-vous pour accéder à votre espace personnel" />
            <LoginForm />
        </div>
    );
}

export default Login;
