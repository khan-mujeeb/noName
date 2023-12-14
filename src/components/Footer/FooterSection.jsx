import { FaGooglePlay, FaLinkedin } from "react-icons/fa";
import SocialAccount from "./SocialAccount.jsx";
import { FaGithub } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import socialLinks from "../../data/socialProfile.js";

const FooterSection = () => {
    return (
        <footer className="flex p-10 bg-violet-600 mt-60 justify-between items-center">
            <p className="text-4xl text-white font-semibold">
                Mujeeb Ur Rahman Khan
            </p>

            <div className="flex gap-6">
                <SocialAccount
                    icon={<FaLinkedin />}
                    url={socialLinks.LinkedIn}
                    title="LinkedIn"
                />
                <SocialAccount icon={<FaGithub/>} url="" title="Github" />
                <SocialAccount
                    icon={<FaGooglePlay />}
                    url={socialLinks.GooglePlay}
                    title="Google PlayStore"
                />
                <SocialAccount
                    icon={<FaStore />}
                    url={socialLinks.MicrosoftEdgeStore}
                    title="Edge Extension Store"
                />
            </div>
        </footer>
    );
};

export default FooterSection;
