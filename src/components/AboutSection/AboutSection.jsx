import EducationSection from "./EducationSection.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import PageTitle from "../PageTitle.jsx";
import dp from "../../assets/img/dp.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Ab.css"
const AboutSection = () => {
    
    return (
        <div id="about" className="h-screen w-scree gap-28 flex flex-col items-center justify-center ">

            <PageTitle subTitle="Get To Know More" title="About Me" />

            <div className="flex gap-36 justify-center items-center ">
                {/* image */}
                <div id="floating" className="rounded-full overflow-clip h-96 w-96 flex justify-center items-center shadow-sm shadow-black ">
                    <img src={dp} alt="" />
                </div>

                <div className="w-[600px] h-full backdrop-blur-sm p-4 rounded-xl">
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
}

export default AboutSection;
