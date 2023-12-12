import EducationSection from "./AboutSection/EducationSection.jsx";
import PersonalInfo from "./AboutSection/PersonalInfo.jsx";

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

                        {/* personal info */}
                        <TabPanel className="mt-10">
                            <PersonalInfo  />
                        </TabPanel>

                        {/* education */}
                        <TabPanel>
                            <EducationSection />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
