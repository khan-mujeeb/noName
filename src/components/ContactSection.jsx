import contactMe from "../assets/img/contact_me.svg";
import PageTitle from "./PageTitle";
import InfoBlock from "../components/AboutSection/InfoBlock.jsx";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import { FaLocationDot } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { CiSquareChevLeft } from "react-icons/ci";
import { Input } from "postcss";

const ContactSection = () => {
    return (
        <div className="flex flex-col mt-36 ">
            <PageTitle title="Contact Me" subTitle={"say Hello"} />
            <div className="flex justify-around items-center">
                <div className="w-96 flex flex-col gap-4">
                    <h1 className="text-5xl font-semibold ">
                        {"Let's Work Together"}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consectetur, adipisci repudiandae! Earum illum a,
                    </p>
                </div>
                <img className="w-96" src={contactMe} alt="" />
            </div>
            <div className="flex items-center justify-around">
                <div className="flex flex-col gap-5">
                    <InfoBlock
                        icon={<CiMail />}
                        data="mujeebkhan1831@gmail.com"
                    />

                    <InfoBlock icon={<FaLocationDot />} data="Pune, India" />
                    <InfoBlock icon={<FaPhone />} data="+91 8766516237" />
                </div>
                <div className="flex flex-col gap-5">

                    <div className="flex p-2 w-96 border border-gray-600 rounded-xl items-center">
                        <input className="flex-auto" type="text" placeholder="Enter Your Email"/>
                        <MdOutlineMail/>
                    </div>
                    <div className="flex p-2 w-96 border border-gray-600 rounded-xl items-center">
                        <input className="flex-auto" type="text" placeholder="Enter Your Subject"/>
                        <CiSquareChevLeft/>
                    </div>
                    <div className="flex p-2 w-96 border h-36 border-gray-600 rounded-xl">
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
