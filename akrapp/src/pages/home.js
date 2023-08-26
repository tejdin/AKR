import React from 'react';
import ServiceSection from "../Components/ServiceSection/ServiceSection";
import HeroSection from "../Components/HeroSection/HeroSection";
import './home.css';

const Home = () => {


    return (
        <div>
            <HeroSection welcomeText="Bienvenue" phrase="Inspirée par l'esprit audacieux de Hannibal Barca, AKR-SMART conquiert le paysage technologique. Offrant des solutions cloud, du développement de logiciels sur mesure et du testing, nous sommes les alliés indispensables pour votre aventure numérique. Rejoignez-nous et conquérons le monde numérique ensemble!" />
            <ServiceSection />
            <h2 className='partners-section'>Nos Partenaires</h2>
            <div className="carousel">
                <div className="carousel-inner">
                    <img src="https://www.ada-aura.org/wp-content/uploads/2019/03/Logo-partenaire-300x244.png"
                         alt="Logo du partenaire 1" />
                    <img src="https://www.ada-aura.org/wp-content/uploads/2019/03/Logo-partenaire-300x244.png"
                         alt="Logo du partenaire 2" />
                </div>
            </div>
        </div>
    );
}

export default Home;
