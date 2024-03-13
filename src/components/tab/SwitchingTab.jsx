import React from "react";
import "./SwitchingTab.css";


const SwitchingTab = ({onTabChange}) => {
    const [activeTab, setActiveTab] = React.useState(0);
    const [left, setLeft] = React.useState(0);
    const data = ["Play Store", "Extensions", "Paper Work"];

    const activeTabs = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setActiveTab(index);
        }, 200);
        onTabChange(tab, index);
    };

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data.map((tab, index) => {
                    return (
                        <span
                            key={index}
                            className={`flex items-center justify-center text-center tabItem ${
                                activeTab === index ? "active" : ""
                            } `}
                            onClick={() => activeTabs(tab, index)}
                        >
                            {tab}
                        </span>
                    );
                })}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
    );
};

export default SwitchingTab;


