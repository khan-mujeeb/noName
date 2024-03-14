import React from "react";
import PageTitle from "../PageTitle";
import SwitchingTab from "../tab/SwitchingTab.jsx";
import Carosal from "../carosal/Carosal.jsx";
import "./PublicWork.css";
import wip from "../../data/carosal.js";
const PublicWork = () => {
    
    const [data, setData] = React.useState(wip[0]);

    const onTabChange = (tab, index) => {
        setData(wip[index] || []);
        console.log(tab, index);
        console.log(data);
    };
    
    return (
        <div className="flex flex-col mt-28 items-center justify-center malg:max-3xl:gap-32 gap-24 mb-24">
            <PageTitle
                title="Featured"
                subTitle="my published work"
            />
            <div className="flex w-full flex-col gap-10 items-center justify-center">
            <SwitchingTab  onTabChange={onTabChange}/>
            <Carosal data={data}/>
            </div>
        </div>
    );
};

export default PublicWork;


// {/* yt Shorts  */}
// <div className="flex justify-between w-[1280px] rounded-2xl lg:max-3xl:flex-row flex-col gap-40">
// {/* promotion box  */}
// <div className="flex items-center justify-center ">
//     <img
//         src={ytShort}
//         alt=""
//         className="absolute lg:max-3xl:w-80 w-64 opacity-95"
//     />
//     <div className="relative flex flex-col items-center justify-center w-72 gap-3">
//         <h1 className=" lg:max-3xl:text-2xl text-xl font-semibold">
//             YT Shorts
//         </h1>
//         <p className="lg:max-3xl:text-lg text-xs font-semibold text-center text-gray-750">
//             Learn concepts in 60 seconds
//         </p>
//         <a
//             href={socialProfile.youtube}
//             target="_blank"
//             rel="noreferrer"
//             className={`${TailwindCustomStyle.lightGradiantBg} lg:max-3xl:text-lg text-xs`}
//         >
//             Explore
//         </a>
//     </div>
// </div>

// {/* items  */}
// <div className="lg:max-3xl:flex lg:max-3xl:visible hidden justify-between">
//     <a
//         className="font-semibold circle-1 bg-red-500  text-center text-2xl lg:max-3xl:flex  lg:max-3xl:visible hidden justify-center items-center"
//         href="https://www.youtube.com/@mujeebkhan4919/shorts"
//         target="_blank"
//         rel="noreferrer"
//     >
//         Learn to Write Readme.md in 60s
//     </a>
//     <a
//         className="font-semibold circle-2 flex justify-center text-center text-2xl items-center"
//         href="https://www.youtube.com/@mujeebkhan4919/shorts"
//         target="_blank"
//         rel="noreferrer"
//     >
//         Dark mode in react using Tailwind CSS
//     </a>
// </div>
// </div>
