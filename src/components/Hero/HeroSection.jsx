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



const HeroSection = () => {

    return (
        
        <div id="hero" className="select-none h-full flex justify-center items-center lg:max-2xl:gap-28 mt-10 lg:max-2xl:flex-row flex-col gap-10">

            <img
                className="lg:max-2xl:h-[500px]  lg:max-2xl:lg:w-[500px]  h-60 w-[300px] "
                src={dp}
                alt=""
            />

            {/* info  */}
            <div className="flex flex-col items-center justify-center gap-6 w-96">
                <img className="h-10 w-10" src={hi} alt="" />

                {/* hello message  */}
                <div className="flex items-center gap-2 font-semibold text-text_secondary">
                    <h4 className=" lg:max-2xl:text-xl text-lg">{"Hello, I'm"}</h4>
                </div>

                {/* name  */}
                <h1 className=" font-semibold lg:max-2xl:text-[3rem] text-3xl">Mujeeb Khan</h1>

                {/* job title  */}
                <div className="hero-section-left-subheading flex gap-2 lg:max-2xl:text-3xl text-2xl w-full font-semibold text-text_secondary">
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
                    <a href= {resume} download={"mujeeb_khan_resume"} className="flex items-center justify-center rounded-3xl bg-white p-2 border-black border-2 hover:bg-black hover:text-white transition-all duration-700 font-semibold lg:max-2xl:p-3 lg:max-2xl:text-md text-sm">
                        Download CV
                    </a>
                    <button className="rounded-3xl bg-black p-3 lg:max-2xl:p-3 text-sm text-white font-semibold">
                        Contact Info
                    </button>
                </div>

                {/* social profile  */}
                <div className="flex gap-6 mt-2 flex-wrap">
                    <SocialAccountHoverLine name="Linkedin" icon={linkedin} url={socialLinks.LinkedIn} />
                    <SocialAccountHoverLine name="Github" icon={github} url={socialLinks.GitHub} />
                    <SocialAccountHoverLine name="Twitter" icon={twitter} url={socialLinks.Twitter} />
                    <SocialAccountHoverLine name="Blog" icon={medium} url={socialLinks.Medium} />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;