import React, { useState, useEffect } from 'react';
import ServiceCardPanier from '../Components/ServiceCardPanier/ServiceCardPanier';
import BankInfo from '../Components/BankInfo/BankInfo';
import './CartPage.css';
import HeroSection from "../Components/HeroSection/HeroSection";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [carts, setCarts] = useState([]);
    const userId = sessionStorage.getItem('userId');

    useEffect(() => {
        // Récupération des informations de cart pour l'utilisateur
        fetch(`http://localhost:3500/users/${userId}/cart`)
            .then(response => response.json())
            .then(data => setCarts(data))
            .catch(error => console.error('Erreur:', error));
        // Récupération des services pour l'utilisateur
        fetch(`http://localhost:3500/users/${userId}/cart/services`)
            .then(response => response.json())
            .then(data => setCartItems(data))
            .catch(error => console.error('Erreur:', error));
    }, []);

    const removeItemFromCart = (id) => {
        // Vérifiez que 'id' et 'carts' sont définis
        console.log(carts)
        console.log(id)
        if (id && carts) {
            // Trouvez le 'cartId' qui contient le service avec cet id
            const cartId = carts.find(cart => cart.serviceId === id).id;
            console.log('http://localhost:3500/users/${userId}/cart/${cartId}')
            if (cartId) {
                // Appel API pour supprimer l'article du panier
                fetch(`http://localhost:3500/users/${userId}/cart/${id}`, {
                    method: 'DELETE'
                })
                    .then(() => {
                        // Mettre à jour l'état des paniers
                        const { [cartId]: _, ...updatedCarts } = carts;
                        setCarts(updatedCarts);

                        // Mettre à jour l'état des articles du panier
                        const newCartItems = cartItems.filter(item => item.id !== id);
                        setCartItems(newCartItems);
                    })
                    .catch(error => console.error('Erreur lors de la suppression:', error));
            }
        }
    };



    return (
        <div>
            <HeroSection welcomeText={"Panier"} />
            <div className="cart-page-container">
                <div className="cart-items-container">
                    {cartItems.map(item => (
                        <ServiceCardPanier
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            onRemoveFromCart={() => removeItemFromCart(item.id)}
                        />
                    ))}
                </div>

                {Array.isArray(cartItems) ? <BankInfo cartItems={cartItems} /> : null}
            </div>
        </div>
    );
};

export default CartPage;
