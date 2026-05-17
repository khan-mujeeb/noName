import TimelineSection from "./TimelineSection.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import PageTitle from "../PageTitle.jsx";
import dp from "../../assets/img/dp.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Ab.css"
import { experienceData } from "../../data/about.js";
import { educationData } from "../../data/about.js";
const AboutSection = () => {
    
    return (
        <div className="lg:max-3xl:mt-32 h-full w-screen lg:max-3xl:gap-28 flex flex-col items-center justify-center gap-10">

            <PageTitle subTitle="Get To Know More" title="About Me" />

            <div className="flex lg:max-3xl:gap-36 gap-10 justify-center items-center  lg:max-3xl:flex-row flex-col ">
                
                {/* image */}
                <div id="floating" className="rounded-full overflow-clip flex justify-center items-center shadow-sm shadow-black lg:max-3xl:h-96 lg:max-3xl:w-96 h-48 w-48 ">
                    <img src={dp} alt="" />
                </div>

                <div className="lg:max-3xl:w-[600px] w-80 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/70">
                    <Tabs selectedTabClassName="portfolio-tab-selected">
                        <TabList className="portfolio-tab-list">
                            <Tab className="portfolio-tab">Personal Info</Tab>
                            <Tab className="portfolio-tab">Education</Tab>
                            <Tab className="portfolio-tab">Experience</Tab>
                        </TabList>

                        {/* personal info */}
                        <TabPanel className="mt-10">
                            <PersonalInfo  />
                        </TabPanel>

                        {/* education */}
                        <TabPanel>
                            <TimelineSection data={educationData} type="education" />
                        </TabPanel>

                        {/* education */}
                        <TabPanel>
                            <TimelineSection data={experienceData} type="work" />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
