import React from "react";

const NavItem = ({item, selectedItem, handleNavigation, setSelectedItem, setIsNavOpen}) => {
    return (
        <li
            key={item.id}
            className={`flex text-xl hover:font-semibold dark:text-gray-100 transition-all duration-500 ${
                selectedItem === item.id
                    ? "font-semibold text-violet-950 dark:text-yellow-500"
                    : ""
            }`}
            href="/about"
            onClick={() => {
                handleNavigation(item.id);
                setSelectedItem(item.id);
                setIsNavOpen((prev) => !prev)
            }}
        >
            {item.name}
        </li>
    );
};

export default NavItem;
