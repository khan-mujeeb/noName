import React from "react";

const SocialAccount = ({icon, url, title}) => {
    return (
        <a href={url} target="_blank" rel="noreferrer" className="flex">
            <div className="lg:max-3xl:text-2xl relative bg-bg-secondary shadow-md dark:shadow-xl bg-blue-100 rounded-full  lg:max-3xl:h-16 lg:max-3xl:w-16 w-10 h-10 grid place-items-center group">
                <span>
                    {icon}
                </span>
                <div className="opacity-0 invisible w-max group-hover:opacity-100 group-hover:visible absolute -top-8 rounded capitalize bg-slate-900/75 dark:bg-slate-700/90 text-white dark:text-slate-100 py-1 px-2 text-sm duration-200">
                    {title}
                </div>
            </div>
        </a>
    );
};

export default SocialAccount;
