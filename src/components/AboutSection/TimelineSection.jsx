import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaBook } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const TimelineSection = ({ data, type }) => {
    const TitleIcon = type === "work" ? FaBriefcase : FaBook;
    const OrganizationIcon = type === "work" ? MdBusiness : IoIosSchool;

    return (
        <VerticalTimeline lineColor="black">
            {data.map((item) => (
                <VerticalTimelineElement
                    key={item.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        height: "auto",
                        width: "auto",
                        color: "#000",
                    }}
                >
                    <div className="flex flex-col">
                        <div className="flex gap-2 items-center">
                            <TitleIcon />
                            <h3 className="vertical-timeline-element-title text-sm">
                                {item.title}
                            </h3>
                        </div>

                        <div className="flex text-sm gap-3 items-center">
                            <OrganizationIcon />
                            <h4 className="vertical-timeline-element-subtitle text-sm">
                                {item.organization}
                            </h4>
                        </div>

                        <div className="flex gap-2 items-center">
                            <MdDateRange />
                            <h4 className="vertical-timeline-element-subtitle text-sm">
                                {item.date}
                            </h4>
                        </div>
                    </div>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default TimelineSection;