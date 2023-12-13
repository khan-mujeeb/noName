import HeroSection from "./components/HeroSection.jsx";
import NavBar from "./components/NavBar.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SKillsSection from "./components/SkillsSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FooterSection from "./components/FooterSection.jsx";

function App() {
    return (
        <div className=" w-screen h-screen overflow-x-hidden">
            {/* nav bar */}
            <NavBar />

            {/* hero section  */}
            <HeroSection />

            <AboutSection />

            {/* skills section  */}
            <SKillsSection />

            {/* project section */}
            <ProjectSection />

            {/* contact me section */}
            <ContactSection />

            {/* footer  */}
            <FooterSection />
        </div>
    );
}

export default App;
