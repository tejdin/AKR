import React from 'react';
import './ServiceCardPanier.css';

const ServiceCardPanier = ({ name, image, description, price,onRemoveFromCart }) => {
    return (
        <div className="service-card-panier">
            <img src={image} alt={name} className="service-image" />
            <div className="service-info">
                <h4 className="service-name">{name}</h4>
                <p className="service-description">{description}</p>
                <p className="service-price">Prix: {price} €</p>

        </div>
            <button onClick={onRemoveFromCart} className="service-remove-button">Supprimer</button>


        </div>
    );
};

export default ServiceCardPanier;
