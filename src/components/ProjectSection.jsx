import React, { useState, useEffect } from "react";
import PageTitle from "./PageTitle";
import projects from "../data/projectData";

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
        <div className="flex flex-col gap-20 items-center">
            <PageTitle title="Projects" subTitle="Browse My Recent" />
            <div className="flex gap-10">
                <button onClick={() => setType("web")}>Web</button>
                <button onClick={() => setType("android")}>Android</button>
            </div>

            <div className="flex justify-center items-center flex-col">
                <div className="grid grid-cols-2 gap-10">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="w-[550px] p-10 rounded-xl shadow-md shadow-black">
                            <div className="flex flex-col gap-4 items-center">
                                <h1 className="text-2xl font-semibold">{project.name}</h1>
                                <iframe
                                    width="90%"
                                    height="275"
                                    src= {project.youtube}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                                <p className=" text-sm">{project.description}</p>
                                <div className="flex gap-4">
                                    {project.skills.map((tag, tagId) => (
                                        <div
                                            key={tagId}
                                            className="bg-gray-100 rounded-lg p-2 text-sm shadow-sm shadow-black"
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
