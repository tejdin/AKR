import React, { useState, useEffect } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesSection = () => {
    const [services, setServices] = useState([]);

    const fetchServices = () => {
        fetch('http://localhost:3500/services')
            .then((response) => response.json())
            .then((data) => setServices(data))
            .catch((error) => console.error('Erreur:', error));
    };

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <section className="services-section">
            <h2>Nos Services</h2>
            <div className="service-grid">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        title={service.name}  // Ici, j'ai modifié "title" en "name"
                        description={service.description}
                        imageUrl="https://cdn.midjourney.com/809d21d1-0320-4a78-bc60-9f5ad75c2eef/0_2.png"
                        price={service.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
