import React, { useState } from 'react';
import './SignupForm.css';
import {useNavigate} from "react-router-dom";

const SignupForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        // Créer un objet contenant les données du formulaire
        const formData = {
            firstName,
            lastName,
            email,
            password
        };
        console.log('Inscription avec : ', formData);
        console.log('Inscription avec : ', JSON.stringify(formData));

        // Envoyer une requête POST à l'API
        fetch('http://localhost:3500/users', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json()) // Convertir la réponse en JSON
            .then(data => {
                console.log('Inscription réussie:', data);
                navigate('/login');
            })
            .catch((error) => {
                console.error('Erreur:', error);
                alert("Erreur lors de l'inscription verfier les champs");


            });
    };

    return (
        <div className="signup-container">

            <div className="signup-box">
                <h2 className="signup-title">Inscription</h2>
                <form className="signup-form">
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Prénom"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Nom de famille"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
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
                    <button className="signup-button" type="button" onClick={handleSignup}>
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
