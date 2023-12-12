import React from "react";
import HeroSection from "./components/HeroSection.jsx";
import NavBar from "./components/NavBar.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SKillsSection from "./components/SkillsSection.jsx";
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

            {/* skills section  */}
            <SKillsSection />
        </div>
    );
}

export default App;
