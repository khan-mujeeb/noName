import dp from "../../assets/img/person.png";
import hi from "../../assets/img/Hi.gif";
import Typed from "react-typed";
import github from "../../assets/img/social/github.png";
import linkedin from "../../assets/img/social/linkedin.png";
import twitter from "../../assets/img/social/twitter.png";
import medium from "../../assets/img/social/medium.png";
import socialLinks from "../../data/socialProfile";
import resume from "../../assets/resume.pdf";
import SocialAccountHoverLine from "./SocialAccountHoverLine.jsx";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div
                id="hero"
                className="select-none h-full flex justify-center items-center lg:max-3xl:gap-28 mt-10 lg:max-3xl:flex-row flex-col gap-10"
            >
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, staggerChildren: 0.5 }}
                    className="lg:max-3xl:h-[500px]  lg:max-3xl:lg:w-[500px] h-52 w-64"
                    src={dp}
                    alt=""
                />

                {/* info  */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-col items-center justify-center lg:max-3xl:gap-6 lg:max-3xl:w-96 gap-2 w-80"
                >
                    <img
                        className="lg:max-3xl:h-10 lg:max-3xl:w-10 w-8 h-8"
                        src={hi}
                        alt=""
                    />

                    {/* hello message  */}
                    <div className="flex items-center gap-2 font-semibold text-text_secondary">
                        <h4 className=" lg:max-3xl:text-xl text-md">
                            {"Hello, I'm"}
                        </h4>
                    </div>

                    {/* name  */}
                    <h1 className=" font-semibold lg:max-3xl:text-[3rem] text-2xl">
                        Mujeeb Khan
                    </h1>

                    {/* job title  */}
                    <div className="hero-section-left-subheading flex gap-2 lg:max-3xl:text-3xl text-xl lg:max-3xl:w-96 w-72 font-semibold text-text_secondary">
                        <div className=" inline">I am </div>
                        <Typed
                            strings={[
                                "IT Engineer",
                                "Android Developer",
                                "Frontend Developer",
                                "Tech Blogger",
                            ]}
                            typeSpeed={100}
                            backSpeed={80}
                            backDelay={1000}
                            loop
                            className="role text-blue-950"
                        />
                    </div>

                    {/* buttons  */}
                    <div className="flex gap-6 mt-1">
                        <a
                            href={resume}
                            download={"mujeeb_khan_resume"}
                            className="flex items-center justify-center rounded-3xl bg-white p-2 border-black border-2 hover:bg-black hover:text-white transition-all duration-700 font-semibold lg:max-3xl:p-3 lg:max-3xl:text-md text-sm"
                        >
                            Download CV
                        </a>
                        <button className="rounded-3xl bg-black p-3 lg:max-3xl:p-3 text-sm text-white font-semibold">
                            Contact Info
                        </button>
                    </div>

                    {/* social profile  */}
                    <div className="flex gap-6 mt-2 flex-wrap">
                        <SocialAccountHoverLine
                            name="Linkedin"
                            icon={linkedin}
                            url={socialLinks.LinkedIn}
                        />
                        <SocialAccountHoverLine
                            name="Github"
                            icon={github}
                            url={socialLinks.GitHub}
                        />
                        <SocialAccountHoverLine
                            name="Twitter"
                            icon={twitter}
                            url={socialLinks.Twitter}
                        />
                        <SocialAccountHoverLine
                            name="Blog"
                            icon={medium}
                            url={socialLinks.Medium}
                        />
                    </div>
                </motion.div>
            </div>
    );
};

export default HeroSection;
