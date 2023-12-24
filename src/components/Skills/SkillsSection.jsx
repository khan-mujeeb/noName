import PageTitle from "../PageTitle.jsx";
import html from "../../assets/img/stack/html-5.png";
import css from "../../assets/img/stack/css.png";
import js from "../../assets/img/stack/java-script.png";
import react from "../../assets/img/stack/react.svg";
import tailwind from "../../assets/img/stack/tailwind.svg";
import TechStack from "./TechStack.jsx";
import webDev from "../../assets/img/webDev.gif";
import sql from "../../assets/img/stack/sql.png";
import git from "../../assets/img/stack/git.png";
import vscode from "../../assets/img/stack/vscode.png";
import postman from "../../assets/img/stack/postman.png";
import androidDev from "../../assets/img/androidDev2.gif";
import android from "../../assets/img/stack/android.png";
import androidStudio from "../../assets/img/stack/android_studio.png";
import kotlin from "../../assets/img/stack/kotlin.png";
import java from "../../assets/img/stack/java.png";
import firebase from "../../assets/img/stack/firebase.png";
const SkillsSection = () => {
    return (
        <div  className="select-none flex items-center flex-col md:max-3xl:gap-36 gap-16 md:max-3xl:mt-28 mt-16">
            <PageTitle subTitle="What I do" title="My Skills" />

            {/* front-end  */}
            <div className="flex items-center justify-center md:max-3xl:flex-row lg:max-3xl:gap-36 flex-col-reverse gap-10">
                <img className="lg:max-3xl:w-[500px] w-72" src={webDev} alt="" />

                <div className="flex flex-col items-center gap-10 backdrop-blur-sm p-4">
                    <h2 className="lg:max-3xl:text-3xl text-2xl font-semibold dark:text-gray-200">
                        Front End Developmet
                    </h2>
                    {/* tech stack */}
                    <div className="flex gap-4 justify-center flex-wrap md:max-3xl:[500px] w-80">
                        <TechStack title="HTML5" icon={html} />
                        <TechStack title="CSS3" icon={css} />
                        <TechStack title="JavaScript" icon={js} />
                        <TechStack title="React" icon={react} />
                        <TechStack title="Tailwind CSS" icon={tailwind} />
                        <TechStack title="SQL" icon={sql} />
                        <TechStack title="Git" icon={git} />
                        <TechStack title="VS Code" icon={vscode} />
                        <TechStack title="Postman" icon={postman} />
                    </div>

                    {/* description  */}
                    <ul className="md:max-3xl:self-start dark:text-gray-300">
                        <li className=" list-disc">Responsive Web Design</li>
                        <li className=" list-disc">Single Page Application</li>
                        <li className=" list-disc">Progressive Web Application</li>
                    </ul>
                </div>
            </div>

            {/* android dev  */}
            <div className="flex items-center justify-center md:max-3xl:flex-row lg:max-3xl:gap-36 flex-col gap-10 ">
                <div className="flex flex-col items-center gap-10 backdrop-blur-sm p-4">
                    <h2 className="lg:max-3xl:text-3xl text-2xl font-semibold dark:text-gray-200">
                        Android Developmet
                    </h2>
                    {/* tech stack */}
                    <div className="flex gap-4 justify-center flex-wrap md:max-3xl:[500px] w-80">
                        <TechStack title="Android" icon={android} />
                        <TechStack title="Android Studio" icon={androidStudio} />
                        <TechStack title="Kotlin" icon={kotlin} />
                        <TechStack title="Java" icon={java} />
                        <TechStack title="Firebase" icon={firebase} />
                        <TechStack title="Git" icon={git} />

                    </div>

                    {/* description  */}
                    <ul className="md:max-3xl:self-start dark:text-gray-300">
                        <li className=" list-disc">Native Android App</li>
                        <li className=" list-disc">Android App with Firebase</li>
                        <li className=" list-disc">Android App with Rest API</li>

                    </ul>
                </div>

                <img className="lg:max-3xl:w-[500px] w-80" src={androidDev} alt="" />
            </div>
        </div>
    );
};

export default SkillsSection;
