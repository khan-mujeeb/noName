import HeroSection from "./components/HeroSection.jsx";
import NavBar from "./components/NavBar.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SKillsSection from "./components/SkillsSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
import ParticleBg from "./components/ParticleBg.jsx";

function App() {
    return (
        <div className=" w-screen h-screen overflow-x-hidden">
            {/* nav bar */}
            <NavBar />

            <div className=" min-h-screen flex flex-col">
                <div className=" absolute">
                    <ParticleBg />
                </div>
                {/* hero section  */}
                <div className="h-screen relative">
                    <HeroSection />
                </div>

                <div className="relative">
                    <AboutSection className=" relative" />
                </div>
                <div className="relative">
                    {/* skills section  */}
                    <SKillsSection />
                </div>
                <div className="relative">
                    {/* project section */}
                    <ProjectSection />
                </div>
                <div className="relative">
                    {/* contact me section */}
                    <ContactSection />
                </div>
                <div className="relative">
                    {/* footer  */}
                    <FooterSection />
                </div>
                <div className="relative"></div>
            </div>
        </div>
    );
}

export default App;
