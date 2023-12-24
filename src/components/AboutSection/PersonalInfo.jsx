import InfoBlock from "./InfoBlock.jsx";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdDateRange, MdMail } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import contactInfo from "../../data/contactInfo.js";

const PersonalInfo = () => {
    return <div className="flex flex-col w-full gap-10">
    {/* description  */}
    <div className=" text-gray-700">
        {contactInfo.introduction}
    </div>

    {/* info  */}
    <div className="grid lg:max-2xl:grid-cols-2 gap-x-16 gap-y-2">
        <InfoBlock icon={<FaUserAlt />} data= {contactInfo.name} />

        <InfoBlock icon={<FaPhone />} data= {contactInfo.phoneNumber} />

        <InfoBlock icon={<MdMail />} data= {contactInfo.email} />

        <InfoBlock icon={<MdDateRange />} data= {contactInfo.dob} />

        <InfoBlock icon={<IoIosSchool />} data= {contactInfo.education}/>
        <InfoBlock icon={<FaLocationDot />} data= {contactInfo.location} />
    </div>
    {/* languages  */}
    <div className="flex flex-col gap-1">
        <h2 className=" font-semibold  dark:text-gray-200">Language Skills</h2>
        <div className="w-full h-[0.1px]  bg-gray-300"></div>
        <p className="text-gray-700 dark:text-gray-300">English, Hindi, Marathi</p>
    </div>
</div>
};

export default PersonalInfo;



