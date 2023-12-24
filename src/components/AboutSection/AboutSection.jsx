import EducationSection from "./EducationSection.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import PageTitle from "../PageTitle.jsx";
import dp from "../../assets/img/dp.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Ab.css"
const AboutSection = () => {
    
    return (
        <div id="about" className="lg:max-3xl:mt-32 h-full w-screen lg:max-3xl:gap-28 flex flex-col items-center justify-center gap-10">

            <PageTitle subTitle="Get To Know More" title="About Me" />

            <div className="flex lg:max-3xl:gap-36 gap-10 justify-center items-center  lg:max-3xl:flex-row flex-col ">
                
                {/* image */}
                <div id="floating" className="rounded-full overflow-clip flex justify-center items-center shadow-sm shadow-black lg:max-3xl:h-96 lg:max-3xl:w-96 h-48 w-48 ">
                    <img src={dp} alt="" />
                </div>

                <div className="lg:max-3xl:w-[600px] w-80 backdrop-blur-sm p-4 rounded-xl">
                    <Tabs>
                        <TabList className="flex gap-4">
                            <Tab >Personal Info</Tab>
                            <Tab >Education</Tab>
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
