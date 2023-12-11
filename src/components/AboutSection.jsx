import InfoBlock from "./InfoBlock.jsx";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import dp from "../assets/img/dp.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutSection = () => {
    return (
        <div className="h-full gap-28 flex flex-col items-center justify-center ">
            <div className="flex flex-col gap-1 items-center">
                <p className="text-lg">Get To Know More</p>
                <h2 className="text-5xl font-bold">About Me</h2>
            </div>
            <div className="flex gap-36 justify-center items-center ">
                {/* image */}
                <div className="rounded-full overflow-clip h-96 w-96 flex justify-center items-center ">
                    <img src={dp} alt="" />
                </div>

                <div className="w-[600px] h-full">
                    <Tabs>
                        <TabList className="flex gap-4">
                            <Tab>Personal Info</Tab>
                            <Tab>Education</Tab>
                        </TabList>

                        <TabPanel className="mt-10">
                            {/* info section  */}
                            <div className="flex flex-col w-full gap-10">
                                {/* description  */}
                                <div>
                                    I am a currently pursuing Bachelors in
                                    Information Technology from Pune University.
                                    I've a good coding experience in Android
                                    Development, C++, Core Java and currently
                                    exploring MERN stack
                                </div>

                                {/* info  */}
                                <div className="grid grid-cols-2 gap-x-16 gap-y-2">
                                    <InfoBlock
                                        icon={<FaUserAlt />}
                                        data="Mujeeb Khan"
                                    />

                                    <InfoBlock
                                        icon={<FaPhone />}
                                        data="+91 8766516237"
                                    />

                                    <InfoBlock
                                        icon={<CiMail />}
                                        data="mujeebkhan1831@gmail.com"
                                    />

                                    <InfoBlock
                                        icon={<MdDateRange />}
                                        data="18/02/2002"
                                    />

                                    <InfoBlock
                                        icon={<IoIosSchool />}
                                        data="B.E Information Technology"
                                    />
                                    <InfoBlock
                                        icon={<FaLocationDot />}
                                        data="Pune, India"
                                    />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>hello</TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
