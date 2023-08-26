import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import SignupForm from "../Components/SignUp/SignUpForm";

const Signup = () => {
    sessionStorage.clear();
    return (
        <div>
            <HeroSection welcomeText="Bienvenue sur AKR SMART" phrase="Créez votre compte pour accéder à votre espace personnel" />
            <SignupForm />
        </div>
    );
}

export default Signup;