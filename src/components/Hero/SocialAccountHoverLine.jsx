import React from "react";

function SocialAccountHoverLine({ name, icon, url}) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center justify-center gap-1"
        >
            <img className=" lg:max-2xl:h-14 lg:max-2xl:w-14 h-10 w-10" src={icon} alt="" />
            <div>
                <h2>{name}</h2>
                <div className="line h-1 bg-black rounded-r-lg w-0 group-hover:w-full transition-all duration-600"></div>
            </div>
        </a>
    );
}

export default SocialAccountHoverLine;
