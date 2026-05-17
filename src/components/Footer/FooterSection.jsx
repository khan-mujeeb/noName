import { FaGooglePlay, FaLinkedin } from "react-icons/fa";
import SocialAccount from "./SocialAccount.jsx";
import { FaGithub } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import socialLinks from "../../data/socialProfile.js";

const FooterSection = () => {
    return (
        <footer className="mt-40 flex flex-col items-center justify-between gap-8 bg-slate-950 p-8 text-white lg:max-3xl:flex-row lg:max-3xl:p-10">
            <div>
                <p className="text-2xl font-semibold lg:max-3xl:text-4xl">
                    Mujeeb Khan
                </p>
                <p className="mt-2 text-sm text-slate-400">
                    Software Engineer | C++ | React | Android
                </p>
            </div>

            <div className="flex gap-6 flex-wrap">
                <SocialAccount
                    icon={<FaLinkedin />}
                    url={socialLinks.LinkedIn}
                    title="LinkedIn"
                />
                <SocialAccount icon={<FaGithub/>} url={socialLinks.GitHub} title="Github" />
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
