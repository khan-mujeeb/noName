// Desc: This is a component that will be used to display the shareable links for the projects
const ProjectShareable = ({ url, icon, name }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="group relative grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-xl text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-950 hover:bg-slate-950 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:shadow-none dark:hover:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-slate-950"
            href={url}
        >
            <span>{icon}</span>
            <div className="invisible absolute -top-9 w-max rounded-md bg-slate-950 px-2 py-1 text-xs text-white opacity-0 shadow-lg duration-200 group-hover:visible group-hover:opacity-100 dark:bg-slate-700 dark:text-slate-100">
                {name}
            </div>
        </a>
    );
};

export default ProjectShareable;
