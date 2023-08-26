import React, {useEffect, useState} from 'react';
import './BankInfo.css';
import visaLogo from './visa-logo.png'; // Remplacez par le chemin réel vers le logo de Visa
import masterCardLogo from './mastercard-logo.png';
import {useNavigate} from "react-router-dom";

const BankInfo = (cartItems) => {
    const [totalHT, setTotalHT] = useState(0);
    const [totalTTC, setTotalTTC] = useState(0);
    const navigate = useNavigate();



    useEffect(() => {
        const cartItemsArray = Object.values(cartItems);
        console.log("cartItemsArray:", cartItemsArray);
        console.log("cartItemsArrayfristitemprice:", cartItemsArray[0].price);
        let totalHT = 0;
        cartItemsArray[0].forEach(item => {
            totalHT += item.price;
            console.log("item.price:", item.price);
        });
        setTotalHT(totalHT)

        const totalTTC = totalHT * 1.2; // Supposant une TVA de 20%
        setTotalTTC(totalTTC);

        console.log("Total HT:", totalHT);
        console.log("Total TTC:", totalTTC);
    }, [cartItems]);
    const [selectedCard, setSelectedCard] = useState('');

    const selectCardType = (type) => {
        setSelectedCard(type);
    }
    const proceedToPayment = () => {
        fetch(`http://localhost:3500/users/${sessionStorage.getItem('userId')}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Commande réussie:', data);
                navigate('/dashboard');

            })
            .catch((error) => {
                console.error('Erreur:', error);
                // Gérer les erreurs ici
            });
    };

    return (
        <div className="bank-info-container">
            <h2 className="bank-info-header">Informations bancaires</h2>
            <div className="card-types">
                <img
                    src={visaLogo}
                    alt="Visa"
                    className={selectedCard === 'Visa' ? 'selected' : ''}
                    onClick={() => selectCardType('Visa')}
                />

                <img
                    src={masterCardLogo}
                    alt="MasterCard"
                    className={selectedCard === 'MasterCard' ? 'selected' : ''}
                    onClick={() => selectCardType('MasterCard')}
                />
            </div>

            <p className="selectedCartName">{selectedCard}</p>
            <div className="bank-info-field">
                <label>Numéro de carte:</label>
                <input type="text"/>
            </div>
            <div className="bank-info-field">
                <label>Date d'expiration:</label>
                <input type="text"/>
            </div>
            <div className="bank-info-field">
                <label>CVV:</label>
                <input type="text"/>
            </div>
            <div className="totals">
                <p>Total HT: {totalHT} €</p>
                <p>Total TTC: {totalTTC} €</p>
            </div>

            <button className="bank-info-button" onClick={proceedToPayment}>Procéder au paiement</button>
        </div>
    );
};

export default BankInfo;
