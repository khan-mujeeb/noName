import React from "react";
import { LuGithub } from "react-icons/lu";
import { FaGooglePlay } from "react-icons/fa";


const ProjectListItem = ({ project }) => {
    return (
        <div
            key={project.id}
            className="w-[550px] p-10 rounded-xl shadow-md shadow-gray-900 transition duration-300 hover:bg-stone-100"
        >
            <div className="flex flex-col gap-4 items-center">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-2xl font-semibold text-gray-700 ">
                        {project.name}
                    </h1>

                    <a target="_blank" rel="noreferrer" href={project.github}>
                        <LuGithub />
                    </a>

                    {project.executable.length !== 0 ? (
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl relative bg-bg-secondary shadow-md dark:shadow-xl bg-blue-100 rounded-full h-10 w-10 sm:h-10 sm:w-10 grid place-items-center group"
                            href={project.executable}
                        >
                            <span>
                                <FaGooglePlay />
                            </span>
                            <div className="opacity-0 invisible w-max group-hover:opacity-100 group-hover:visible absolute -top-8 rounded capitalize bg-slate-900/75 dark:bg-slate-700/90 text-white dark:text-slate-100 py-1 px-2 text-sm duration-200">
                                {"PlayStore"}
                            </div>
                        </a>
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
