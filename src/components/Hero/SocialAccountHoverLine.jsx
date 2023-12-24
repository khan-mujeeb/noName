import React from "react";

function SocialAccountHoverLine({ name, icon, url}) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center justify-center gap-1"
        >
            <img className=" lg:max-3xl:h-14 lg:max-3xl:w-14 h-10 w-10" src={icon} alt="" />
            <div>
                <h2 className="lg:max-3xl:text-xl text-sm dark:text-gray-100">{name}</h2>
                <div className="dark:bg-yellow-500 line h-1 bg-black rounded-r-lg w-0 group-hover:w-full transition-all duration-600"></div>
            </div>
        </a>
    );
}

export default SocialAccountHoverLine;
