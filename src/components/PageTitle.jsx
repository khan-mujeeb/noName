const PageTitle = ({subTitle, title}) => {
    return (
        <div className="flex flex-col gap-1 items-center">
            <p className="text-lg text-gray-600">{subTitle}</p>
            <h2 className="text-5xl font-bold">{title}</h2>
        </div>
    );
};

export default PageTitle;
