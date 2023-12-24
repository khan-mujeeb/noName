import React from "react";
import { LuGithub } from "react-icons/lu";
import { FaGooglePlay } from "react-icons/fa";
import ProjectShareable from "./ProjectShareable.jsx";

const ProjectListItem = ({ project }) => {
    return (
        <div
            key={project.id}
            className="sm:max-3xl:w-[550px]  md:max-3xl:p-10 p-3 w-80 rounded-xl shadow-md shadow-gray-900 transition duration-300 hover:bg-stone-100 backdrop-blur-sm dark:bg-gradient-to-r from-gray-800 from-10% via-darkNavbar via-30% to-gray-900 to-90%"
        >
            <div className="flex flex-col gap-4 items-center">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-100">
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
                <p className=" text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex gap-4 flex-wrap">
                    {project.skills.map((tag, tagId) => (
                        <div
                            key={tagId}
                            className="bg-gray-100 rounded-lg p-2 text-sm shadow-sm shadow-gray-800 text-gray-600 hover:font-semibold transition duration-600 hover:bg-blue-300 dark:bg-darkNavbar dark:text-gray-400 dark:hover:bg-blue-900 dark:hover:text-gray-50"
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
