const NavItem = ({item, selectedItem, handleNavigation, setSelectedItem, setIsNavOpen}) => {
    const isSelected = selectedItem === item.id;

    return (
        <li key={item.id} className="flex">
            <button
                type="button"
                className={`relative flex cursor-pointer items-center bg-transparent text-base font-medium tracking-normal transition-all duration-300 lg:max-3xl:text-lg ${
                    isSelected
                        ? "text-slate-950 dark:text-white"
                        : "text-slate-500 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                }`}
                onClick={() => {
                    handleNavigation(item.id);
                    setSelectedItem(item.id);
                    setIsNavOpen?.(false);
                }}
            >
                {item.name}
                <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-slate-950 transition-all duration-300 dark:bg-yellow-400 ${
                        isSelected ? "w-full" : "w-0"
                    }`}
                />
            </button>
        </li>
    );
};

export default NavItem;
