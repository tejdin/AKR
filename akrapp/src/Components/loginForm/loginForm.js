import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const formData = {
            email,
            password
        };
        console.log('Login avec:', JSON.stringify(formData));

        fetch('http://localhost:3500/users/login', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.id) {
                    console.log('Login réussi:', data.id);
                    sessionStorage.setItem('userId', data.id);
                    sessionStorage.setItem('isAuthenticated', 'true');
                    sessionStorage.setItem('shouldRefreshDashboard', 'true'); // Nouvelle valeur pour forcer le rafraîchissement

                    navigate('/dashboard');
                } else {
                    console.error('Login échoué:', data);
                }
            })
            .catch((error) => {
                console.error('Erreur:', error);
            });
    };

    return (
        <div className="login-box">
            <h2 className="login-title">Login</h2>
            <form className="login-form">
                <input
                    className="text-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="text-input"
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" type="button" onClick={handleLogin}>
                    Se connecter
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
