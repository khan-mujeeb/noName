import React from "react";
import PageTitle from "./PageTitle";
import html from "../assets/img/stack/html-5.png";
import css from "../assets/img/stack/css.png";  
import js from "../assets/img/stack/java-script.png";
import react from "../assets/img/stack/react.svg";
import tailwind from "../assets/img/stack/tailwind.svg";
import TechStack from "./TechStack.jsx";
const SkillsSection = () => {
    return (
        <div className="h-screen bg-green-200">
            <PageTitle subTitle="What I do" title="My Skills" />;
            <div>
                <div className="flex gap-4 justify-center flex-wrap">
                    
                    <TechStack title="HTML5" icon={html} />
                    <TechStack title="CSS3" icon={css} />
                    <TechStack title="JavaScript" icon={js} />
                    <TechStack title="React" icon={react} />
                    <TechStack title="Tailwind CSS" icon={tailwind} />

                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
