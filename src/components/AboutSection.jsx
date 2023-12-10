import React from "react";
import InfoBlock from "./InfoBlock.jsx";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const AboutSection = () => {
    return <div className="h-full  flex flex-col  items-center">
        <p className="text-lg">Get To Know More</p>
        <h2 className="text-5xl font-bold">About Me</h2>
        <div className="h-full flex">

            {/* image */}
            <img src="" alt="" />

            {/* info section  */}
            <div className="flex flex-col">

                {/* buttons  */}
                <div>
                    <button>Personal Info</button>
                    <button>Education</button>
                </div>

                {/* description  */}
                <div></div>

                {/* info  */}
                <div className="grid grid-cols-2 gap-x-16 gap-y-2">

                    <InfoBlock icon={<FaUserAlt />} data="Mujeeb Khan" />

                    <InfoBlock icon={<FaPhone />} data="+91 8766516237" />


                    <InfoBlock icon={<CiMail />} data="mujeebkhan1831@gmail.com" />

                    <InfoBlock icon={<MdDateRange />} data="18/02/2002" />

                    
                    <InfoBlock icon={<IoIosSchool/>} data="Mujeeb Khan" />
                    <InfoBlock icon={<FaLocationDot />} data="Pune, India" />

                </div>

            </div>

        </div>
    </div>;
};

export default AboutSection;
