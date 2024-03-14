import { useState, useEffect } from "react";

/* import components */
import HeroSection from "./components/Hero/HeroSection.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import AboutSection from "./components/AboutSection/AboutSection.jsx";
import SKillsSection from "./components/Skills/SkillsSection.jsx";
import ProjectSection from "./components/Projects/ProjectSection.jsx";
import ContactSection from "./components/ContactUs/ContactSection.jsx";
import FooterSection from "./components/Footer/FooterSection.jsx";
import ParticleBg from "./components/ParticleBg.jsx";
import BlogSection from "./components/Blog/BlogSection.jsx";
import PublicWork from "./components/PublicWork/PublicWork.jsx";
import Loader from "./components/loader/Loader.jsx";


function App() {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    

    return (
        <div className="w-screen h-screen overflow-x-hidden">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <NavBar handleNavigation={handleNavigation} />

                    <div className="min-h-screen flex flex-col p-1">
                        <div className="absolute">
                            <ParticleBg
                                bgColor="#fff"
                                particleColor="#131B23"
                            />
                        </div>

                        <div id="home" className="h-screen relative">
                            <HeroSection />
                        </div>

                        <div id="about" className="relative">
                            <AboutSection />
                        </div>

                        <div id="skills" className="relative">
                            <SKillsSection />
                        </div>

                        <div id="wip" className="relative">
                            <PublicWork />
                        </div>

                        <div id="project" className="relative">
                            <ProjectSection />
                        </div>
                        <div id="blog" className="relative">
                            <BlogSection />
                        </div>

                        <div id="contact" className="relative">
                            <ContactSection />
                        </div>
                    </div>
                    <div className="relative">
                        <FooterSection />
                    </div>
                </>
            )}
        </div>
    );
    
}



export default App;
