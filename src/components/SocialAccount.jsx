import React from "react";

const SocialAccount = ({icon, url, title}) => {
    return (
        <a href={url} target="_blank" rel="noreferrer" className="flex">
            <div className="text-2xl relative bg-bg-secondary shadow-md dark:shadow-xl bg-blue-100 rounded-full h-14 w-14 sm:h-16 sm:w-16 grid place-items-center group">
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
