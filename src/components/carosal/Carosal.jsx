import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const arrowClass =
    "absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/90 text-xl text-slate-700 shadow-sm backdrop-blur-md transition hover:border-slate-950 hover:bg-slate-950 hover:text-white dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-slate-950";

const Carosal = ({ data }) => {
    return (
        <Carousel
            showIndicators={data.length > 1}
            showStatus={false}
            autoPlay={data.length > 1}
            interval={3500}
            labels={{
                leftArrow: "Previous slide",
                rightArrow: "Next slide",
                item: "slide",
            }}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className={`${arrowClass} left-3`}
                    >
                        <MdArrowBack />
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className={`${arrowClass} right-3`}
                    >
                        <MdArrowForward />
                    </button>
                )
            }
            className="featured-carousel w-full max-w-4xl"
            showThumbs={false}
            infiniteLoop={data.length > 1}
        >
            {data.map((project) => (
                <div key={project.id} className="px-2 py-1">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white/88 text-left shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/88 dark:hover:border-yellow-400/70 lg:grid-cols-[0.86fr_1.14fr]"
                    >
                        <div className="flex items-center justify-center bg-slate-50 p-8 dark:bg-slate-950/70 lg:p-10">
                            <div className="grid h-44 w-44 place-items-center rounded-3xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:h-52 sm:w-52">
                                <img
                                    className="h-full w-full rounded-2xl object-contain"
                                    src={project.img}
                                    alt={project.name}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-5 p-7 sm:p-9">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white dark:bg-yellow-400 dark:text-slate-950">
                                    {project.type}
                                </span>
                                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:border-slate-700 dark:text-slate-400">
                                    {project.status}
                                </span>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white">
                                    {project.name}
                                </h2>
                                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="inline-flex w-max items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white dark:border-slate-700 dark:text-slate-100 dark:group-hover:border-yellow-400 dark:group-hover:bg-yellow-400 dark:group-hover:text-slate-950">
                                View work
                                <MdArrowOutward className="text-lg" />
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </Carousel>
    );
};

export default Carosal;
