import React from 'react';
import './SubServiceCard.css';  // Assurez-vous de créer ce fichier CSS

// Dans SubServiceCard.js
const SubServiceCard = ({ key, image, name, description, price, onAddToCart }) => {
    return (
        <div className="subservice-card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Prix: {price} €</p>
            <button className="add-to-cart-btn" onClick={onAddToCart}>Ajouter au panier</button>
        </div>
    );
};

export default SubServiceCard;
