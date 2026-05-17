import { FaGithub, FaLinkedinIn, FaMedium, FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward, MdDownload } from "react-icons/md";
import resume from "../../assets/resume.pdf";
import socialLinks from "../../data/socialProfile";
import OurModel from "../model/OurModel.jsx";

const focusAreas = [
    "Enterprise systems",
    "Product interfaces",
    "Mobile applications",
];

const metrics = [
    { value: "C++", label: "Backend engineering" },
    { value: "React", label: "Modern web apps" },
    { value: "Kotlin", label: "Android products" },
];

const socials = [
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: socialLinks.LinkedIn },
    { name: "GitHub", icon: <FaGithub />, url: socialLinks.GitHub },
    { name: "X", icon: <FaXTwitter />, url: socialLinks.Twitter },
    { name: "Medium", icon: <FaMedium />, url: socialLinks.Medium },
];

const HeroSection = () => {
    return (
        <section className="mx-auto grid h-full w-full max-w-6xl select-none items-center gap-8 px-5 pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
            <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
                    Software Engineer at TCS
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:max-3xl:text-6xl">
                        Building reliable systems and polished digital products.
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 lg:text-lg">
                        I am Mujeeb Khan, a software engineer at TCS. I spent a year working on NSE trading systems and now contribute to the VIL CRM project, while continuing to build React and Android products.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                    {focusAreas.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
                    <a
                        href="#project"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-yellow-400 dark:text-slate-950 dark:hover:bg-yellow-300"
                    >
                        View Projects
                        <MdArrowOutward className="text-lg" />
                    </a>
                    <a
                        href={resume}
                        rel="noreferrer"
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/85 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-slate-950 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-yellow-400"
                    >
                        <MdDownload className="text-lg" />
                        Download CV
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/85 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-slate-950 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-yellow-400"
                    >
                        Contact Me
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.name}
                            className="grid h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white/90 text-2xl text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:border-slate-950 hover:bg-slate-950 hover:text-white dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-slate-950"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>

            <div className="relative flex items-center justify-center">
                <div className="absolute inset-x-10 top-8 h-40 rounded-full bg-slate-200/70 blur-3xl dark:bg-slate-700/40" />
                <div className="relative w-full max-w-[460px] rounded-3xl border border-slate-200 bg-white/75 p-4 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/75">
                    <div className="h-64 rounded-2xl bg-slate-50 dark:bg-slate-950/70 sm:h-80 lg:h-[430px]">
                        <OurModel />
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                        {metrics.map((metric) => (
                            <div
                                key={metric.label}
                                className="rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800"
                            >
                                <p className="text-lg font-bold text-slate-950 dark:text-white">
                                    {metric.value}
                                </p>
                                <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500 dark:text-slate-400">
                                    {metric.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
