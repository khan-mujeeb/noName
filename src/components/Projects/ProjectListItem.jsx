import React from "react";
import { LuGithub } from "react-icons/lu";
import { FaGooglePlay } from "react-icons/fa";
import ProjectShareable from "./ProjectShareable.jsx";

const ProjectListItem = ({ project }) => {
    return (
        <div
            key={project.id}
            className="sm:max-2xl:w-[550px]  md:max-2xl:p-10 w-80 rounded-xl shadow-md shadow-gray-900 transition duration-300 hover:bg-stone-100 backdrop-blur-sm"
        >
            <div className="flex flex-col gap-4 items-center">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-2xl font-semibold text-gray-700 ">
                        {project.name}
                    </h1>

                    <ProjectShareable url={project.github} icon={<LuGithub />} name={"Github"} />

                    {project.executable.length !== 0 ? (
                        <ProjectShareable url={project.executable} icon={<FaGooglePlay />} name={"PlayStore"} />
                    ) : null}
                </div>

                <iframe
                    width="100%"
                    height="250"
                    src={project.youtube}
                    title="YouTube video player"
                    frameBorder="0"
                    allow=""
                    allowFullScreen
                ></iframe>
                <p className=" text-sm text-gray-600">{project.description}</p>
                <div className="flex gap-4 flex-wrap">
                    {project.skills.map((tag, tagId) => (
                        <div
                            key={tagId}
                            className="bg-gray-100 rounded-lg p-2 text-sm shadow-sm shadow-gray-800 text-gray-600 hover:font-semibold transition duration-600 hover:bg-blue-300"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectListItem;
