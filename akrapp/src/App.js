import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Footer from "./Components/footer/footer";
import ServicePage from "./pages/Services";
import UserDashboard from "./pages/Dashboard";
import CartPage from "./pages/CartPage";
import MessagePage from "./pages/MessagePage";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        setIsAuthenticated(userId ? true : false);
    }, []);

    return (
        <Router>
            <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/service/:serviceName/*" element={<ServicePage />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/panier" element={<CartPage />} />
                <Route path="/messagerie" element={<MessagePage />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
