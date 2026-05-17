import React from "react";

const SocialAccount = ({icon, url, title}) => {
    return (
        <a href={url} target="_blank" rel="noreferrer" className="flex">
            <div className="relative grid h-11 w-11 place-items-center rounded-full bg-white/10 text-lg text-white shadow-md transition hover:bg-white hover:text-slate-950 lg:max-3xl:h-14 lg:max-3xl:w-14 lg:max-3xl:text-xl group">
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
