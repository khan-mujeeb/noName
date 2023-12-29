import React from "react";
import HeroSection from "./components/Hero/HeroSection.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import AboutSection from "./components/AboutSection/AboutSection.jsx";
import SKillsSection from "./components/Skills/SkillsSection.jsx";
import ProjectSection from "./components/Projects/ProjectSection.jsx";
import ContactSection from "./components/ContactUs/ContactSection.jsx";
import FooterSection from "./components/Footer/FooterSection.jsx";
import ParticleBg from "./components/ParticleBg.jsx";
import BlogSection from "./components/Blog/BlogSection.jsx";
import { motion } from "framer-motion";
import PublicWork from "./components/PublicWork/PublicWork.jsx";

function App() {
    const [darkMode, setDarkMode] = React.useState(false);


    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className=" w-screen h-screen overflow-x-hidden">
            {/* nav bar */}
            <NavBar handleNavigation={handleNavigation} darkMode={darkMode} setDarkMode={setDarkMode}/>

            <div className=" min-h-screen flex flex-col p-1">
                <div className=" absolute">
                    {
                        <ParticleBg
                            bgColor={darkMode ? "#131B23" : "#ffffff"}
                            particleColor={darkMode ? "#ffffff" : "#131B23"}
                        />
                    }
                </div>

                {/* hero section  */}
                <div id="home" className="h-screen relative">
                    <HeroSection />
                </div>

                {/* about section  */}
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: "smooth",

                            duration: 1,
                        },
                    }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    id="about"
                    className="relative"
                >
                    <AboutSection className=" relative" />
                </motion.div>

                {/* skills section  */}
                <div id="skills" className="relative">
                    <SKillsSection />
                </div>

                {/* <div id="wip" className=" relative">
                    <PublicWork />
                </div> */}

                {/* project section */}
                <div id="project" className="relative">
                    <ProjectSection />
                </div>
                <div id="blog" className="relative">
                    <BlogSection />
                </div>

                {/* contact me section */}
                <div id="contact" className="relative">
                    <ContactSection />
                </div>

                {/* footer  */}
            </div>
            <div className="relative">
                <FooterSection />
            </div>
        </div>
    );
}

export default App;
