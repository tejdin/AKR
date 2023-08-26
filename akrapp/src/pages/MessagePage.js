import React, { useState, useEffect } from 'react';
import './MessagePage.css';

const MessagePage = () => {
    const [orderLines, setOrderLines] = useState([]);
    const [selectedOrderLine, setSelectedOrderLine] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3500/users/${sessionStorage.getItem('userId')}/lineorders`)  // Mettre à jour selon votre route pour obtenir les OrderLines
            .then(response => response.json())
            .then(data => setOrderLines(data))
            .catch(error => console.error("Erreur de récupération des OrderLines:", error));
        console.log(orderLines);
    }, []);

    useEffect(() => {
        if (selectedOrderLine) {
            fetch(`http://localhost:3500/message/orderline/${selectedOrderLine}`)
                .then(response => response.json())
                .then(data => setMessages(data))
                .catch(error => console.error("Erreur de récupération des messages:", error));
        }
    }, [selectedOrderLine]);

    const sendMessage = () => {
        const senderId = sessionStorage.getItem('userId');  // À remplacer
        const receiverId = "1";  // À remplacer

        fetch("http://localhost:3500/message/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                senderId,
                receiverId,
                OrderLineId: selectedOrderLine,
                message: newMessage,
            }),
        })
            .then(response => response.json())
            .then(data => {
                setMessages([...messages, data]);
                setNewMessage("");
            })
            .catch(error => {
                console.error("Erreur d'envoi du message:", error);
            });
    };

    return (
        <div className="message-page">
            <div className="orderlines-panel">
                <h2>Conversations</h2>
                <ul>
                    {orderLines.map((orderLine, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedOrderLine(orderLine.id)}
                            className={selectedOrderLine === orderLine.id ? 'selected' : ''}
                        >
                            {orderLine.serviceName}
                        </li>
                    ))}
                </ul>

            </div>
            <div className="messages-panel">
                <h2>Messages</h2>
                <div className="messages-list">
                    {messages.map((message, index) => (
                        <div key={index} className="message">
                            <span>{message.senderId}: </span>
                            <span>{message.message}</span>
                        </div>
                    ))}
                </div>
                <div className="message-input">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Envoyer</button>
                </div>
            </div>
        </div>
    );
};

export default MessagePage;
