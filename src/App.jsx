import React from "react";
import HeroSection from "./components/HeroSection.jsx";
import NavBar from "./components/NavBar.jsx";
NavBar
function App() {
    return (
        <div className=" w-screen h-screen">
            {/* nav bar */}
            <NavBar />

            {/* hero section  */}
            <HeroSection />

        </div>
    );
}

export default App;
