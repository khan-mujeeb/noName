import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IconContext } from "react-icons";

const DarkModeBtn = ({darkMode, handleDarkMode}) => {
    return (
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
    );
};

export default DarkModeBtn;
