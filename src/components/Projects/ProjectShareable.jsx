import React from "react";

const ProjectShareable = ({url, icon, name}) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="text-2xl relative bg-bg-secondary shadow-md dark:shadow-xl bg-blue-100 rounded-full h-10 w-10 sm:h-10 sm:w-10 grid place-items-center group"
            href={url}
        >
            <span>
                {icon}
            </span>
            <div className="opacity-0 invisible w-max group-hover:opacity-100 group-hover:visible absolute -top-8 rounded capitalize bg-slate-900/75 dark:bg-slate-700/90 text-white dark:text-slate-100 py-1 px-2 text-sm duration-200">
                {name}
            </div>
        </a>
    );
};

export default ProjectShareable;
