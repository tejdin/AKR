import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import HeroSection from "../Components/HeroSection/HeroSection";

const UserDashboard = () => {
    const [activeSection, setActiveSection] = useState('orders');
    const [orders, setOrders] = useState([{id: 1, serviceName: 'Pommes', status: 'Livré'}, {id: 2, item: 'Bananes', status: 'En cours'}]);
    const [paymentHistory, setPaymentHistory] = useState([{id: 1, amount: '20€', date: '01-01-2021'}, {id: 2, amount: '15€', date: '01-02-2021'}]);
    const [userInfo, setUserInfo] = useState({firstName: '', lastName: '', email: ''});

    const fetchOrders = async () => {
        try {
            const response = await fetch(`http://localhost:3500/users/${sessionStorage.getItem('userId')}/lineorders`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Erreur:', error);
        }
    }
    const fetchUserInfo = async () => {
        try {
            const response = await fetch(`http://localhost:3500/users/${sessionStorage.getItem('userId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données');
            }
            const data = await response.json();
            setUserInfo({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email
            });
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    useEffect(() => {
        if(sessionStorage.getItem('shouldRefreshDashboard') === 'true') {
            window.location.reload();
            sessionStorage.setItem('shouldRefreshDashboard', 'false');
        }


        fetchOrders();
        fetchUserInfo();
    }, []);

    const renderSection = () => {
        switch (activeSection) {
            case 'orders':
                return (
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Article</th>
                            <th>Statut</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.serviceName}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                );
            case 'info':
                return (
                    <div>
                        <strong>Nom :</strong> {userInfo.firstName} {userInfo.lastName} <br />
                        <strong>Email :</strong> {userInfo.email}
                    </div>
                );
            case 'paymentHistory':
                return (
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Montant</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {paymentHistory.map(payment => (
                            <tr key={payment.id}>
                                <td>{payment.id}</td>
                                <td>{payment.amount}</td>
                                <td>{payment.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                );
            default:
                return <div>Section non trouvée</div>;
        }
    };

    return (
        <div>
            <HeroSection welcomeText="Compte" phrase={"Espace Personnelle"} />
            <div className="dashboard">
                <div className="profile-section">
                    <img className="profile-picture" src="https://cdn.midjourney.com/33b6252b-faf5-42f0-a964-4d1cf7f184f9/0_0.png" alt="Profile" />
                    <h2>{userInfo.firstName + " " + userInfo.lastName}</h2>
                </div>
                <div className="dashboard-sections">
                    <button className="button" onClick={() => setActiveSection('orders')}>Commandes</button>
                    <button className="button" onClick={() => setActiveSection('info')}>Informations Personnelles</button>
                    <button className="button" onClick={() => setActiveSection('paymentHistory')}>Historique des Paiements</button>
                </div>
                <div className="active-section">
                    {renderSection()}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;

