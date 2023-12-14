import React, { useState, useEffect } from "react";
import PageTitle from "../PageTitle";
import projects from "../../data/projectData";

import ProjectListItem from "./ProjectListItem.jsx";

const ProjectSection = () => {
    const [type, setType] = useState("web");
    const [filteredProjects, setFilteredProjects] = useState(projects);

    console.log(projects);

    useEffect(() => {
        setFilteredProjects(
            projects.filter((project) => project.type === type)
        );
    }, [type]);

    return (
        <div
            className="select-none flex flex-col items-center mt-28 "
        >
            <PageTitle title="Projects" subTitle="Browse My Recent" />
            <div className="flex gap-10 mt-10">
                <button
                    className="rounded-3xl p-3 border-black border-2 hover:bg-black hover:text-white transition-all duration-700 font-semibold"
                    style={{
                        backgroundColor: type === "web" ? "black" : "white",
                        color: type === "web" ? "white" : "black",
                    }}
                    onClick={() => setType("web")}
                >
                    Web
                </button>

                <button
                    className="rounded-3xl p-3 border-black border-2 hover:bg-black hover:text-white transition-all duration-700 font-semibold"
                    style={{
                        backgroundColor: type === "android" ? "black" : "white",
                        color: type === "android" ? "white" : "black",
                    }}
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
