import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Importez useNavigate
import SubServiceCard from '../Components/SubServiceCard/SubServiceCard';
import HeroSection from '../Components/HeroSection/HeroSection';
import './Service.css';
const ServicePage = () => {
    const { serviceName } = useParams();
    const navigate = useNavigate();  // Utilisez useNavigate
    const [subServices, setSubServices] = useState([]);
    const [serviceofthepage, setServiceofthepage] = useState(null);
    const addToCart = async (serviceId) => {
        const userId = sessionStorage.getItem('userId');
        if (!userId) {
            navigate('/login');  // Redirigez avec useNavigate
            return;
        }
        try {
            const response = await fetch(`http://localhost:3500/users/${userId}/cart/${serviceId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log("Ajouté au panier:", data);
            navigate('/panier')

        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    const addToCartWholeService = async () => {
        const userId = sessionStorage.getItem('userId');
        if (!userId) {
            navigate('/login');
            return;
        }

        if (serviceofthepage) {
            try {
                const response = await fetch(`http://localhost:3500/users/${userId}/cart/${serviceofthepage.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                console.log("Service entier ajouté au panier:", data);
            } catch (error) {
                console.error('Erreur:', error);
            }
        }
    };

    useEffect(() => {
        fetch('http://localhost:3500/services')
            .then(response => response.json())
            .then(allServices => {
                const service = allServices.find(s => s.name === serviceName);
                setServiceofthepage(service);
                if (service) {
                    return fetch(`http://localhost:3500/services/${service.id}/subservices`)
                        .then(response => response.json());
                }
                return [];
            })
            .then(data => setSubServices(data))
            .catch(error => console.error('Erreur:', error));
    }, [serviceName]);

    return (
        <div>
            <HeroSection
                welcomeText={serviceName}
                phrase={serviceofthepage ? serviceofthepage.description : ''}
            />

            <div className="subservices-container">
                {subServices.map(subService => (
                    <SubServiceCard
                        key={subService.id}
                        name={subService.name}
                        image={subService.image}
                        description={subService.description}
                        price={subService.price}
                        onAddToCart={() => addToCart(subService.id)}
                    />

                ))}

            </div>
            {serviceofthepage && (
                <button className='add-whole-service-btn' onClick={addToCartWholeService}>Ajouter tout le service au panier</button>
            )}
        </div>
    );
};

export default ServicePage;
