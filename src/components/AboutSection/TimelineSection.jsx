import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaBook } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const TimelineSection = ({ data, type }) => {
    const TitleIcon = type === "work" ? FaBriefcase : FaBook;
    const OrganizationIcon = type === "work" ? MdBusiness : IoIosSchool;

    return (
        <VerticalTimeline lineColor="rgb(148 163 184)">
            {data.map((item) => (
                <VerticalTimelineElement
                    key={item.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        height: "auto",
                        width: "auto",
                        color: "inherit",
                        borderRadius: "1rem",
                        border: "1px solid rgb(226 232 240)",
                        boxShadow: "0 12px 30px rgb(15 23 42 / 0.08)",
                    }}
                >
                    <div className="flex flex-col gap-3 text-slate-800 dark:text-slate-100">
                        <div className="flex items-center gap-2">
                            <TitleIcon />
                            <h3 className="vertical-timeline-element-title text-base font-semibold">
                                {item.title}
                            </h3>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <OrganizationIcon />
                            <h4 className="vertical-timeline-element-subtitle">
                                {item.organization}
                            </h4>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <div className="flex items-center gap-2">
                                <MdDateRange />
                                <span>{item.date}</span>
                            </div>
                            {item.location && (
                                <div className="flex items-center gap-2">
                                    <FaLocationDot />
                                    <span>{item.location}</span>
                                </div>
                            )}
                        </div>

                        {item.summary && (
                            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                                {item.summary}
                            </p>
                        )}

                        {item.highlights && (
                            <ul className="grid gap-2 pt-1">
                                {item.highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950 dark:bg-yellow-400" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default TimelineSection;
