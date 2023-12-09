import React from "react";
import HeroSection from "./components/HeroSection.jsx";
import NavBar from "./components/NavBar.jsx";
import AboutSection from "./components/AboutSection.jsx";
NavBar
function App() {
    return (
        <div className=" w-screen h-screen overflow-x-hidden">
            {/* nav bar */}
            <NavBar />

            {/* hero section  */}
            <HeroSection />

            {/* about section  */}
            <AboutSection />
        </div>
    );
}

export default App;
