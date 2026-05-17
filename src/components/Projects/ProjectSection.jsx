import { useState, useEffect } from "react";
import PageTitle from "../PageTitle";
import projects from "../../data/projectData";

import ProjectListItem from "./ProjectListItem.jsx";

const ProjectSection = () => {
    const [type, setType] = useState("web");
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        setFilteredProjects(
            projects.filter((project) => project.type === type)
        );
    }, [type]);

    return (
        <div
            className="select-none flex flex-col items-center mt-28 "
        >
            <PageTitle title="Hobby Projects" subTitle="Browse My Recent" />
            <div className="flex gap-3 mt-10 rounded-full border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80">
                <button
                    className={`rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 ${
                        type === "web"
                            ? "bg-slate-950 text-white shadow-md dark:bg-yellow-400 dark:text-slate-950"
                            : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                    }`}
                    onClick={() => setType("web")}
                >
                    Web
                </button>

                <button
                    className={`rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 ${
                        type === "android"
                            ? "bg-slate-950 text-white shadow-md dark:bg-yellow-400 dark:text-slate-950"
                            : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                    }`}
                    onClick={() => setType("android")}
                >
                    Android
                </button>
            </div>

            <div className="flex justify-center items-center flex-col mt-20">
                <div className="grid xl:grid-cols-2 gap-10 grid-col-1">
                    {filteredProjects.map((project) => (
                        <ProjectListItem project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
