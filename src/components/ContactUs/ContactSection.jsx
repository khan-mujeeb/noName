import PageTitle from "../PageTitle.jsx";
import contactInfo from "../../data/contactInfo.js";
import socialLinks from "../../data/socialProfile.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMailOutline, MdOutlineWorkOutline } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";

const contactCards = [
    {
        label: "Email",
        value: contactInfo.email,
        Icon: MdMailOutline,
        href: `mailto:${contactInfo.email}`,
    },
    {
        label: "Phone",
        value: contactInfo.phoneNumber,
        Icon: FaPhone,
        href: `tel:${contactInfo.phoneNumber.replace(/\s/g, "")}`,
    },
    {
        label: "Location",
        value: contactInfo.location,
        Icon: FaLocationDot,
    },
    {
        label: "Timezone",
        value: contactInfo.timeZone,
        Icon: FaClock,
    },
];

const collaborationPoints = [
    "Frontend and Android product builds",
    "C++ and systems-oriented engineering roles",
    "Technical writing, demos, and developer tooling",
];

const ContactSection = () => {
    return (
        <section className="mx-auto mt-28 flex w-full max-w-6xl flex-col gap-14 px-5 lg:max-2xl:mt-32">
            <PageTitle title="Contact" subTitle="Let's build something useful" />

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm backdrop-blur-md dark:!border-slate-700 dark:!bg-slate-900 dark:shadow-none lg:p-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-950 text-xl text-white dark:bg-yellow-400 dark:text-slate-950">
                                <MdOutlineWorkOutline />
                            </div>
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                                    Available for
                                </p>
                                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                                    Software engineering opportunities
                                </h3>
                            </div>
                        </div>

                        <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                            {contactInfo.connectMessage}
                        </p>

                        <div className="grid gap-3">
                            {collaborationPoints.map((point) => (
                                <div
                                    key={point}
                                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:!bg-slate-800 dark:!text-slate-200"
                                >
                                    <span className="h-2 w-2 rounded-full bg-slate-950 dark:bg-yellow-400" />
                                    {point}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-yellow-400 dark:text-slate-950 dark:hover:bg-yellow-300"
                            >
                                <RiSendPlaneLine />
                                Send Email
                            </a>
                            <a
                                href={socialLinks.LinkedIn}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-950 dark:!border-slate-700 dark:!bg-slate-800 dark:!text-slate-100 dark:hover:!border-yellow-400"
                            >
                                <FaLinkedin />
                                LinkedIn
                            </a>
                            <a
                                href={socialLinks.GitHub}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-950 dark:!border-slate-700 dark:!bg-slate-800 dark:!text-slate-100 dark:hover:!border-yellow-400"
                            >
                                <FaGithub />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid gap-4">
                    {contactCards.map((item) => {
                        const ContactIcon = item.Icon;
                        const content = (
                            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-md dark:!border-slate-700 dark:!bg-slate-900 dark:shadow-none dark:hover:!border-yellow-400/70">
                                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-lg text-slate-950 dark:!bg-slate-800 dark:!text-yellow-400">
                                    <ContactIcon />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:!text-slate-500">
                                        {item.label}
                                    </p>
                                    <p className="break-words text-sm font-medium text-slate-800 dark:!text-slate-100">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        );

                        return item.href ? (
                            <a key={item.label} href={item.href}>
                                {content}
                            </a>
                        ) : (
                            <div key={item.label}>{content}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
