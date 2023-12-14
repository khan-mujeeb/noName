import InfoBlock from "./InfoBlock.jsx";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const PersonalInfo = () => {
    return <div className="flex flex-col w-full gap-10">
    {/* description  */}
    <div>
        {"I am a currently pursuing Bachelors in Information Technology from Pune University. I've a good coding experience in Android Development, C++, Core Java and currently exploring MERN stack"}
    </div>

    {/* info  */}
    <div className="grid lg:max-2xl:grid-cols-2 gap-x-16 gap-y-2">
        <InfoBlock icon={<FaUserAlt />} data="Mujeeb Khan" />

        <InfoBlock icon={<FaPhone />} data="+91 8766516237" />

        <InfoBlock icon={<CiMail />} data="mujeebkhan1831@gmail.com" />

        <InfoBlock icon={<MdDateRange />} data="18/02/2002" />

        <InfoBlock icon={<IoIosSchool />} data="B.E Information Technology" />
        <InfoBlock icon={<FaLocationDot />} data="Pune, India" />
    </div>
    {/* languages  */}
    <div className="flex flex-col gap-1">
        <h2 className=" font-semibold">Language Skills</h2>
        <div className="w-full h-[0.1px]  bg-gray-300"></div>
        <p>English, Hindi, Marathi</p>
    </div>
</div>
};

export default PersonalInfo;



