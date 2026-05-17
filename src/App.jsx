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
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            return savedTheme === "dark";
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    

    return (
        <div className="h-screen w-screen overflow-x-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-50">
            {loading ? (
                <div className="h-screen w-screen flex justify-center items-center bg-slate-50 dark:bg-slate-950">
                    <Loader />
                </div>
            ) : (
                <>
                    <NavBar
                        handleNavigation={handleNavigation}
                        isDarkMode={isDarkMode}
                        setIsDarkMode={setIsDarkMode}
                    />

                    <div className="min-h-screen flex flex-col p-1">
                        <div className="absolute">
                            <ParticleBg
                                bgColor={isDarkMode ? "#020617" : "#f8fafc"}
                                particleColor={isDarkMode ? "#facc15" : "#131B23"}
                            />
                        </div>

                        <div id="home" className="relative h-screen scroll-mt-24">
                            <HeroSection />
                        </div>

                        <div id="about" className="relative scroll-mt-28 pt-8">
                            <AboutSection />
                        </div>

                        <div id="skills" className="relative scroll-mt-28 pt-8">
                            <SKillsSection />
                        </div>

                        <div id="wip" className="relative scroll-mt-28 pt-8">
                            <PublicWork />
                        </div>

                        <div id="project" className="relative scroll-mt-28 pt-8">
                            <ProjectSection />
                        </div>
                        <div id="blog" className="relative scroll-mt-28 pt-8">
                            <BlogSection />
                        </div>

                        <div id="contact" className="relative scroll-mt-28 pt-8">
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
