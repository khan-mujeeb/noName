import React, { Component } from "react";
import dp from "../assets/img/dp.svg";
import hi from "../assets/img/Hi.gif";
import Typed from "react-typed";
import github from "../assets/img/social/github.png";
import linkedin from "../assets/img/social/linkedin.png";
import twitter from "../assets/img/social/twitter.png";

import medium from "../assets/img/social/medium.png";

export default class HeroSection extends Component {
    render() {
        return (
            <div className=" h-[85vh] flex justify-center items-center flex-wrap lg:gap-36 md:gap-28 sm:gap-24 ">
                {/* dp  */}
                <div
                    className=" lg:h-96 lg:w-96  sm:h-60 sm:w-60 h-56 w-56 rounded-full bg-black overflow-clip flex justify-center items-center"
                >
                    <img className="h-full w-full" src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                </div>

                {/* info  */}
                <div className="flex flex-col items-center justify-center gap-4 w-96">
                    <img className="h-10 w-10" src={hi} alt="" />

                    {/* hello message  */}
                    <div className="flex items-center gap-2 font-semibold text-text_secondary">
                        <h4 className=" text-xl">Hello, I'm</h4>
                    </div>

                    {/* name  */}
                    <h1 className=" font-semibold text-[3rem]">Mujeeb Khan</h1>

                    {/* job title  */}
                    <div className="hero-section-left-subheading flex gap-2 text-3xl w-full font-semibold text-text_secondary">
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
                    <div className="flex gap-6">
                        <button className=" rounded-3xl bg-white p-3 border-black border-2">
                            Download CV
                        </button>
                        <button className="rounded-3xl bg-black p-3 text-white">
                            Contact Info
                        </button>
                    </div>

                    {/* social profile  */}
                    <div className="flex gap-4">
                        <a
                            href=""
                            className="group flex flex-col items-center justify-center gap-1"
                        >
                            <img className=" h-14 w-14" src={linkedin} alt="" />
                            <div>
                                <h2>Linkedin</h2>
                                <div className="line h-1 bg-black rounded-r-lg w-0 group-hover:w-full transition-all duration-600"></div>
                            </div>
                        </a>
                        <a
                            href=""
                            className="group flex flex-col items-center justify-center gap-1"
                        >
                            <img className=" h-14 w-14" src={github} alt="" />
                            <div>
                                <h2>Github</h2>
                                <div className="line h-1 bg-black rounded-r-lg w-0 group-hover:w-full transition-all duration-600"></div>
                            </div>
                        </a>
                        <a
                            href=""
                            className="group flex flex-col items-center justify-center gap-1"
                        >
                            <img className=" h-14 w-14" src={twitter} alt="" />
                            <div>
                                <h2>Twitter</h2>
                                <div className="line h-1 bg-black rounded-r-lg w-0 group-hover:w-full transition-all duration-600"></div>
                            </div>
                        </a>

                        <a
                            href=""
                            className="group flex flex-col items-center justify-center gap-1"
                        >
                            <img className=" h-14 w-14" src={medium} alt="" />
                            <div>
                                <h2>Blog</h2>
                                <div className="line h-1 bg-black rounded-r-lg w-0 group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
