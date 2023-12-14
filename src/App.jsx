import HeroSection from "./components/Hero/HeroSection.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import AboutSection from "./components/AboutSection/AboutSection.jsx";
import SKillsSection from "./components/Skills/SkillsSection.jsx";
import ProjectSection from "./components/Projects/ProjectSection.jsx";
import ContactSection from "./components/ContactUs/ContactSection.jsx";
import FooterSection from "./components/Footer/FooterSection.jsx";
import ParticleBg from "./components/ParticleBg.jsx";

function App() {
    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className=" w-screen h-screen overflow-x-hidden">
            {/* nav bar */}
            <NavBar handleNavigation={handleNavigation} />

            <div className=" min-h-screen flex flex-col">
                <div className=" absolute">
                    <ParticleBg />
                </div>

                {/* hero section  */}
                <div id="home" className="h-screen relative">
                    <HeroSection />
                </div>

                {/* about section  */}
                <div id="about" className="relative">
                    <AboutSection className=" relative" />
                </div>

                {/* skills section  */}
                <div id="skills" className="relative">
                    <SKillsSection />
                </div>

                {/* project section */}
                <div id="project" className="relative">
                    <ProjectSection />
                </div>

                {/* contact me section */}
                <div id="contact" className="relative">
                    <ContactSection />
                </div>
                
                {/* footer  */}
                <div className="relative">
                    <FooterSection />
                </div>
                
            </div>
        </div>
    );
}

export default App;
