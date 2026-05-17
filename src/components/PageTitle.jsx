const PageTitle = ({subTitle, title}) => {
    return (
        <div data-section-title className="flex flex-col items-center gap-2 px-4">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                {subTitle}
            </p>
            <h2 className="text-center text-4xl font-bold text-slate-950 dark:text-gray-50 lg:max-3xl:text-5xl">
                {title}
            </h2>
        </div>
    );
};

export default PageTitle;
