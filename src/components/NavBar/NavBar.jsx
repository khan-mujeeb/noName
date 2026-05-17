import { useEffect, useState } from "react";
import mk_logo from "../../assets/img/mk_logo.png";
import navList from "../../data/navigationData";
import "./NavBar.css";
import NavItem from "./NavItem";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function NavBar({ handleNavigation, isDarkMode, setIsDarkMode}) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("home");
    const [navBarStyle, setNavBarStyle] = useState("nav-visible");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScrollX = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 200) {
                setNavBarStyle(
                    currentScrollY > lastScrollY ? "nav-hidden" : "nav-visible"
                );
            } else {
                setNavBarStyle("nav-visible");
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScrollX);
        return () => window.removeEventListener("scroll", handleScrollX);
    }, []);

    useEffect(() => {
        const sections = navList
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleSection?.target?.id) {
                    setSelectedItem(visibleSection.target.id);
                }
            },
            {
                root: null,
                rootMargin: "-35% 0px -50% 0px",
                threshold: [0.1, 0.25, 0.5, 0.75],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fixed z-50 flex h-20 w-full select-none items-center justify-between border-b border-slate-200/80 bg-white/85 px-6 backdrop-blur-xl transition-all duration-300 dark:border-slate-700/60 dark:bg-slate-950/80 lg:max-3xl:h-24 lg:max-3xl:px-24 ${navBarStyle}`}
        >
            <img className="w-32 lg:max-3xl:w-36" src={mk_logo} alt="Mujeeb Khan" />
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    onClick={() => setIsDarkMode((current) => !current)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-950 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-yellow-400 dark:hover:border-yellow-400"
                >
                    {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
                </button>

                <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 dark:bg-gray-100"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 dark:bg-gray-100"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 dark:bg-gray-100"></span>
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
                        <ul className="flex h-full w-full flex-col items-center justify-between overflow-hidden py-36 dark:bg-slate-950">
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
                    className={`DESKTOP-MENU hidden items-center space-x-8 lg:flex ${navBarStyle}`}
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
        </div>
    );
}
