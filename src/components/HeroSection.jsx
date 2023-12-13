import dp from "../assets/img/person.png";
import hi from "../assets/img/Hi.gif";
import Typed from "react-typed";
import github from "../assets/img/social/github.png";
import linkedin from "../assets/img/social/linkedin.png";
import twitter from "../assets/img/social/twitter.png";
import medium from "../assets/img/social/medium.png";
import socialLinks from "../data/socialProfile";

import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const HeroSection = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles className=" -z-50"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        // <div id="hero" className=" h-full flex justify-center items-center flex-wrap lg:gap-36 md:gap-28 sm:gap-24 mt-10">
        //     {/* dp  */}
        //     {/* <div
        //             className=" lg:h-96 lg:w-96  sm:h-60 sm:w-60 h-56 w-56 flex justify-center items-center"
        //         >

        //         </div> */}
        //     <img
        //         className=" lg:h-96 lg:w-[500px]  sm:h-60 sm:w-[300px] h-56 w-[300px] "
        //         src={dp}
        //         alt=""
        //     />

        //     {/* info  */}
        //     <div className="flex flex-col items-center justify-center gap-4 w-96">
        //         <img className="h-10 w-10" src={hi} alt="" />

        //         {/* hello message  */}
        //         <div className="flex items-center gap-2 font-semibold text-text_secondary">
        //             <h4 className=" text-xl">{"Hello, I'm"}</h4>
        //         </div>

        //         {/* name  */}
        //         <h1 className=" font-semibold text-[3rem]">Mujeeb Khan</h1>

        //         {/* job title  */}
        //         <div className="hero-section-left-subheading flex gap-2 text-3xl w-full font-semibold text-text_secondary">
        //             <div className=" inline">I am </div>
        //             <Typed
        //                 strings={[
        //                     "IT Engineer",
        //                     "Android Developer",
        //                     "Frontend Developer",
        //                     "Tech Blogger",
        //                 ]}
        //                 typeSpeed={100}
        //                 backSpeed={80}
        //                 backDelay={1000}
        //                 loop
        //                 className="role text-blue-950"
        //             />
        //         </div>

        //         {/* buttons  */}
        //         <div className="flex gap-6 mt-1">
        //             <button className=" rounded-3xl bg-white p-3 border-black border-2 hover:bg-black hover:text-white transition-all duration-700 font-semibold">
        //                 Download CV
        //             </button>
        //             <button className="rounded-3xl bg-black p-3 text-white font-semibold">
        //                 Contact Info
        //             </button>
        //         </div>

        //         {/* social profile  */}
        //         <div className="flex gap-6 mt-2">
        //             <a
        //                 href={socialLinks.LinkedIn}
        //                 className="group flex flex-col items-center justify-center gap-1"
        //             >
        //                 <img className=" h-14 w-14" src={linkedin} alt="" />
        //                 <div>
        //                     <h2>Linkedin</h2>
        //                     <div className="line h-1 bg-black rounded-r-lg w-0 group-hover:w-full transition-all duration-600"></div>
        //                 </div>
        //             </a>
        //             <a
        //                 href=""
        //                 className="group flex flex-col items-center justify-center gap-1"
        //             >
        //                 <img className=" h-14 w-14" src={github} alt="" />
        //                 <div>
        //                     <h2>Github</h2>
        //                     <div className="line h-1 bg-black rounded-r-lg w-0 group-hover:w-full transition-all duration-600"></div>
        //                 </div>
        //             </a>
        //             <a
        //                 href=""
        //                 className="group flex flex-col items-center justify-center gap-1"
        //             >
        //                 <img className=" h-14 w-14" src={twitter} alt="" />
        //                 <div>
        //                     <h2>Twitter</h2>
        //                     <div className="line h-1 bg-black rounded-r-lg w-0 group-hover:w-full transition-all duration-600"></div>
        //                 </div>
        //             </a>

        //             <a
        //                 href=""
        //                 className="group flex flex-col items-center justify-center gap-1"
        //             >
        //                 <img className=" h-14 w-14" src={medium} alt="" />
        //                 <div>
        //                     <h2>Blog</h2>
        //                     <div className="line h-1 bg-black rounded-r-lg w-0 group-hover:w-full transition-all duration-700"></div>
        //                 </div>
        //             </a>
        //         </div>
        //     </div>
        // </div>
    );
};

export default HeroSection;
