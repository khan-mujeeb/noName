import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBook } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { MdDateRange } from "react-icons/md";


const EducationSection = () => {
    return (
        <VerticalTimeline lineColor="black"
        >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    // background: "rgb(33, 150, 243)",
                    height: "auto",
                    width: "auto",
                    color: "#000",
                    

                }}
            >
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                        <FaBook />
                        <h3 className="vertical-timeline-element-title text-sm">
                            B.E Information Technology
                        </h3>
                    </div>

                    <div className="flex text-sm gap-3 items-center">
                        <IoIosSchool />
                        <h4 className="vertical-timeline-element-subtitle text-sm">
                            PES Modern College of Engineering, Pune
                        </h4>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <MdDateRange />
                        <h4 className="vertical-timeline-element-subtitle text-sm">
                            2020-2024
                        </h4>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    // background: "rgb(33, 150, 243)",
                    
                    height: "auto",
                    width: "auto",
                    color: "#000",
                }}
            >
                <div className="flex flex-col justify-center">
                    <div className="flex gap-2 items-center">
                        <FaBook />
                        <h3 className="vertical-timeline-element-title text-sm">
                        12th(PCM), HSC
                        </h3>
                    </div>

                    <div className="flex text-sm gap-3 items-center">
                        <IoIosSchool />
                        <h4 className="vertical-timeline-element-subtitle text-sm">
                        Kendriya Vidyalaya No. 2, OFDR, Pune
                        </h4>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <MdDateRange />
                        <h4 className="vertical-timeline-element-subtitle text-sm">
                            2018-2019
                        </h4>
                    </div>
                </div>
            </VerticalTimelineElement>
            

        </VerticalTimeline>
    );
};

export default EducationSection;
