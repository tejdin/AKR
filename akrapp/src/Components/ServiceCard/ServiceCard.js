import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, imageUrl,price }) => {
    return (
        <div className="service-card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Prix: {price} €</p>
        </div>
    );
};

export default ServiceCard;
