import contactMe from "../../assets/img/contact_me.svg";
import PageTitle from "../PageTitle.jsx";
import InfoBlock from "../AboutSection/InfoBlock.jsx";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import { FaLocationDot } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { CiSquareChevLeft } from "react-icons/ci";

const ContactSection = () => {
    return (
        <div  className="flex flex-col mt-28 justify-center lg:max-2xl:gap-10 gap-5">
            <PageTitle title="Contact Me" subTitle={"say Hello"} />
            <div className="flex lg:max-2xl:justify-around justify-center items-center">
                <div className="lg:max-2xl:w-96 flex flex-col gap-4 text-center">
                    <h1 className="lg:max-2xl:text-5xl font-semibold text-3xl">
                        {"Let's Work Together"}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consectetur, adipisci repudiandae! Earum illum a,
                    </p>
                </div>
                <img className="md:max-2xl:w-96 lg:max-2xl:inline-block hidden" src={contactMe} alt="" />
            </div>
            <div className="flex items-center justify-around lg:max-2xl:flex-row flex-col lg:max-2xl:gap-10 gap-5">
                <div className="flex flex-col gap-5">
                    <InfoBlock
                        icon={<CiMail />}
                        data="mujeebkhan1831@gmail.com"
                    />

                    <InfoBlock icon={<FaLocationDot />} data="Pune, India" />
                    <InfoBlock icon={<FaPhone />} data="+91 8766516237" />
                </div>
                <div className="flex flex-col gap-5">

                    <div className="flex p-2 lg:max-2xl:w-96 w-80 border border-gray-600 rounded-xl items-center">
                        <input className="flex-auto" type="text" placeholder="Enter Your Email"/>
                        <MdOutlineMail/>
                    </div>
                    <div className="flex p-2 lg:max-2xl:w-96 w-80 border border-gray-600 rounded-xl items-center">
                        <input className="flex-auto" type="text" placeholder="Enter Your Subject"/>
                        <CiSquareChevLeft/>
                    </div>
                    <div className="flex p-2 lg:max-2xl:w-96 w-80 h-36 border-gray-600 rounded-xl">
                        <input className="w-full border-none" type="text" placeholder="Type Your Message"/>
                        <FiMessageSquare/>
                    </div>

                    <button className=" rounded-3xl bg-white p-3 border-black border-2 hover:bg-black hover:text-white transition-all duration-700 font-semibold">{"Let's Talk"}</button>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
