import { useState } from "react";
import mk_logo from "../../assets/img/mk_logo.png";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IconContext } from "react-icons";
import navList from "../../data/navigationData";
export default function NavBar({ handleNavigation, darkMode, setDarkMode }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("home"); // State to track selected item

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
    };

    return (
        <div className="dark:bg-darkNavbar dark:bg-transparent transition-all duration-700 select-none z-50 flex items-center  border-b border-gray-400 p-8 h-10 fixed w-full backdrop-blur-lg lg:max-3xl:h-28 lg:max-3xl:px-24 justify-between">
            <img className="w-36" src={mk_logo} alt="" />
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>

                        {/* mobile  */}
                        <ul className="flex flex-col items-center justify-between min-h-[250px] overflow-hidden">
                            {navList.map((item) => (
                                <li
                                    key={item.id}
                                    className={`text-xl hover:font-semibold transition-all duration-200 ${
                                        selectedItem === item.id
                                            ? "font-semibold"
                                            : "" // Apply bold style if selected
                                    }`}
                                    onClick={() => {
                                        handleNavigation(item.id);
                                        setSelectedItem(item.id);
                                        setIsNavOpen((prev) => !prev);
                                    }}
                                >
                                    {item.name}
                                </li>
                            ))}
                            <button
                                className="z-50"
                                onClick={() => handleDarkMode()}
                            >
                                {darkMode ? (
                                    <IoSunny className="ico" />
                                ) : (
                                    <IoMoon className="text-2xl" />
                                )}
                            </button>
                        </ul>
                    </div>
                </section>

                {/* desktop  */}

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                    {navList.map((item) => (
                        <li
                            key={item.id}
                            className={`flex text-xl hover:font-semibold dark:text-gray-100 transition-all duration-500 ${
                                selectedItem === item.id
                                    ? "font-semibold text-violet-950"
                                    : ""
                            }`}
                            href="/about"
                            onClick={() => {
                                handleNavigation(item.id);
                                setSelectedItem(item.id);
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                    <button className="z-50" onClick={() => handleDarkMode()}>
                        {darkMode ? (
                            <IconContext.Provider
                                value={{
                                    color: "white",
                                    className: "global-class-name",
                                }}
                            >
                                <div>
                                    <IoSunny className="text-2xl" />
                                </div>
                            </IconContext.Provider>
                        ) : (
                            <IoMoon className="text-2xl" />
                        )}
                    </button>
                </ul>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    );
}
