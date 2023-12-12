import React from "react";
import TechStack from "./TechStack";
import { FaGithub, FaGooglePlay, FaLinkedin } from "react-icons/fa";
import SocialAccount from "./SocialAccount.jsx";

import { FaStore } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

const FooterSection = () => {
    return (
        <footer className="flex p-10 bg-violet-600 mt-60 justify-between items-center">
            <p className="text-4xl text-white font-semibold">Mujeeb Ur Rahman Khan</p>

            <div className="flex gap-6">
                <SocialAccount
                    icon={<FaLinkedin />}
                    url="https://www.linkedin.com/in/mujeeb-ur-rahman-khan-0b1b3b1b0/"
                    title="LinkedIn"
                />
                <SocialAccount icon={LuGithub} url="" title="Github" />
                <SocialAccount
                    icon={<FaGooglePlay />}
                    url=""
                    title="Google PlayStore"
                />
                <SocialAccount
                    icon={<FaStore />}
                    url=""
                    title="Edge Extension Store"
                />
            </div>
        </footer>
    );
};

export default FooterSection;
