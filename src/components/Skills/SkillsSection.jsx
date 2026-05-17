import PageTitle from "../PageTitle.jsx";
import html from "../../assets/img/stack/html-5.png";
import css from "../../assets/img/stack/css.png";
import js from "../../assets/img/stack/java-script.png";
import react from "../../assets/img/stack/react.svg";
import tailwind from "../../assets/img/stack/tailwind.svg";
import sql from "../../assets/img/stack/sql.png";
import git from "../../assets/img/stack/git.png";
import postman from "../../assets/img/stack/postman.png";
import android from "../../assets/img/stack/android.png";
import androidStudio from "../../assets/img/stack/android_studio.png";
import kotlin from "../../assets/img/stack/kotlin.png";
import java from "../../assets/img/stack/java.png";
import firebase from "../../assets/img/stack/firebase.png";
import cpp from "../../assets/img/stack/cpp.png";
import vscode from "../../assets/img/stack/vscode.png";
import { FaAndroid, FaCode, FaServer } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";

const skillGroups = [
    {
        title: "Frontend Engineering",
        Icon: FaCode,
        description:
            "Building responsive interfaces with React, Tailwind CSS, reusable components, and clean client-side state.",
        highlights: ["React UI systems", "Responsive layouts", "API integration"],
        tools: [
            { title: "HTML5", icon: html },
            { title: "CSS3", icon: css },
            { title: "JavaScript", icon: js },
            { title: "React", icon: react },
            { title: "Tailwind CSS", icon: tailwind },
        ],
    },
    {
        title: "Android Development",
        Icon: FaAndroid,
        description:
            "Developing native Android apps with Kotlin, Firebase, Room, Retrofit, and production-ready app flows.",
        highlights: ["Kotlin apps", "Firebase features", "Play Store releases"],
        tools: [
            { title: "Android", icon: android },
            { title: "Android Studio", icon: androidStudio },
            { title: "Kotlin", icon: kotlin },
            { title: "Java", icon: java },
            { title: "Firebase", icon: firebase },
        ],
    },
    {
        title: "Systems & Tooling",
        Icon: FaServer,
        description:
            "Comfortable around C++, SQL, Git, Postman, and developer tooling used to ship reliable software.",
        highlights: ["C++ development", "SQL fundamentals", "Debugging workflows"],
        tools: [
            { title: "C++", icon: cpp },
            { title: "SQL", icon: sql },
            { title: "Git", icon: git },
            { title: "Postman", icon: postman },
            { title: "VS Code", icon: vscode },
        ],
    },
];

const SkillsSection = () => {
    return (
        <section className="mx-auto mt-28 flex w-full max-w-6xl select-none flex-col items-center gap-14 px-5 lg:max-3xl:mt-32">
            <PageTitle subTitle="Capabilities" title="Skills & Tools" />

            <div className="grid w-full gap-5 lg:grid-cols-3">
                {skillGroups.map((group) => {
                    const GroupIcon = group.Icon;

                    return (
                        <article
                            key={group.title}
                            className="flex min-h-[430px] flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/80"
                        >
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-3">
                                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-950 text-xl text-white dark:bg-yellow-400 dark:text-slate-950">
                                        <GroupIcon />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                                        {group.title}
                                    </h3>
                                </div>

                                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                                    {group.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {group.highlights.map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-5 gap-3">
                                {group.tools.map((tool) => (
                                    <div
                                        key={tool.title}
                                        className="group relative grid aspect-square place-items-center rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
                                    >
                                        <img
                                            className="h-8 w-8 object-contain"
                                            src={tool.icon}
                                            alt={tool.title}
                                        />
                                        <span className="pointer-events-none absolute -top-9 z-10 w-max rounded-md bg-slate-950 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition duration-200 group-hover:opacity-100 dark:bg-slate-700">
                                            {tool.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="grid w-full gap-4 rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl dark:border-slate-700 lg:grid-cols-[1fr_2fr]">
                <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-yellow-400 text-slate-950">
                        <HiOutlineSparkles />
                    </div>
                    <div>
                        <p className="text-sm text-slate-300">Current focus</p>
                        <h3 className="text-xl font-semibold">Production engineering</h3>
                    </div>
                </div>
                <p className="text-sm leading-7 text-slate-300 lg:text-base">
                    I am strengthening my C++ and trading-system experience at TCS while continuing to build modern React and Android projects. That mix gives this portfolio a broader story: product-minded UI work backed by practical engineering discipline.
                </p>
            </div>
        </section>
    );
};

export default SkillsSection;
