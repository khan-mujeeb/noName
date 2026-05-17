import React from "react";
import "./SwitchingTab.css";


const SwitchingTab = ({onTabChange}) => {
    const [activeTab, setActiveTab] = React.useState(0);
    const data = ["Play Store", "Extensions", "Paper Work"];

    const activeTabs = (tab, index) => {
        setActiveTab(index);
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
            </div>
        </div>
    );
};

export default SwitchingTab;


