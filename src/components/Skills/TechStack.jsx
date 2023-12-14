import React from "react";

const TechStack = ({title, icon}) => {
    return (
        <div className="text-2xl relative bg-bg-secondary shadow-md dark:shadow-xl rounded-full h-14 w-14 sm:h-16 sm:w-16 grid place-items-center group">
            <span>
                <img className="h-10 w-10" src={icon} alt="" />
            </span>
            <div className="opacity-0 invisible w-max group-hover:opacity-100 group-hover:visible absolute -top-8 rounded capitalize bg-slate-900/75 dark:bg-slate-700/90 text-white dark:text-slate-100 py-1 px-2 text-sm duration-200">
                {title}
            </div>
        </div>
    );
};

export default TechStack;
