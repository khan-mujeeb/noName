import { useState } from "react";
import mk_logo from "../../assets/img/mk_logo.png";
import navList from "../../data/navigationData";
import "./NavBar.css";
import NavItem from "./NavItem";
import { useEffect } from "react";

export default function NavBar({ handleNavigation}) {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    
    
    const [selectedItem, setSelectedItem] = useState("home"); // State to track selected item
    const [navBarStyle, setNavBarStyle] = useState(""); // State to track selected item
    const handleScrollX = () => {
        console.log("scrolling");
        const currentScrollY = window.scrollY;
        if (currentScrollY > 200) {
            if (currentScrollY > lastScrollY) {
                setNavBarStyle("hidden");
            } else {
                setNavBarStyle("visible");
            }
        } else {
            setNavBarStyle("visible");
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollX);
        return () => window.removeEventListener("scroll", handleScrollX);
    }, [lastScrollY]);

    return (
        <div
            className={`dark:bg-darkNavbar dark:bg-transparent transition-all duration-700 select-none z-50 flex items-center  border-b border-gray-400 p-8 h-10 fixed w-full backdrop-blur-lg lg:max-3xl:h-28 lg:max-3xl:px-24 justify-between ${navBarStyle}`}
        >
            <img className="w-36" src={mk_logo} alt="" />
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 dark:text-gray-100"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 dark:text-gray-100"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 dark:text-gray-100"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600 dark:text-gray-100"
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
                        <ul className="flex flex-col items-center justify-between h-full w-full py-36 overflow-hidden dark:bg-darkNavbar">
                            {navList.map((item) => (
                                <NavItem
                                    key={item.id}
                                    item={item}
                                    selectedItem={selectedItem}
                                    handleNavigation={handleNavigation}
                                    setSelectedItem={setSelectedItem}
                                    setIsNavOpen={setIsNavOpen}
                                />
                            ))}
                            
                        </ul>
                    </div>
                </section>

                {/* desktop  */}

                <ul
                    className={`DESKTOP-MENU hidden space-x-8 lg:flex ${navBarStyle}`}
                >
                    {navList.map((item) => (
                        <NavItem
                            key={item.id}
                            item={item}
                            selectedItem={selectedItem}
                            handleNavigation={handleNavigation}
                            setSelectedItem={setSelectedItem}
                        />
                    ))}
                   
                </ul>
            </nav>
        </div>
    );
}
