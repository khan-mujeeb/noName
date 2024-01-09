import React from "react";
import PageTitle from "../PageTitle";
import playStore from "../../assets/img/playStore.png";
import msStore from "../../assets/img/msStore.png";
import qrCodeIcon from "../../assets/img/qr_code.png";
import ytShort from "../../assets/img/ytShort.png";
import smartphone from "../../assets/img/smartphone.png";
import TailwindCustomStyle from "../utlis/style/TailwindCustomStyle";
import socialProfile from "../../data/socialProfile";
import "./PublicWork.css";

const PublicWork = () => {
    return (
        <div className="flex flex-col mt-28 items-center justify-center malg:max-3xl:gap-32 gap-24 mb-24">
            <PageTitle
                title="Real World Work"
                subTitle="my work that is used by people"
            />

            {/* play store  */}
            <div className="flex  lg:max-3xl:justify-between lg:max-3xl:w-[1280px] rounded-2xl lg:max-3xl:flex-row flex-col gap-40 lg:max-3xl:mt-0 mt-32">
                {/* promotion box  */}
                <div className="flex items-center justify-center">
                    <img
                        src={playStore}
                        alt=""
                        className="absolute  lg:max-3xl:w-80 w-64 opacity-95"
                    />
                    <div className=" relative flex flex-col items-center justify-center lg:max-3xl:w-72 gap-3 mr-10">
                        <h1 className=" lg:max-3xl:px-4 px-28 text-start  lg:max-3xl:text-2xl text-md font-semibold">
                            Google Play Store
                        </h1>
                        <p className="lg:max-3xl:px-4 px-28   font-semibold  lg:max-3xl:text-lg text-xs text-center text-gray-750">
                            Where developers thrive, apps come alive!
                        </p>
                        <a
                            href={socialProfile.GooglePlay}
                            target="_blank"
                            rel="noreferrer"
                            className={`${TailwindCustomStyle.lightGradiantBg} lg:max-3xl:text-lg text-xs`}
                        >
                            Explore
                        </a>
                    </div>
                </div>

                {/* items  */}
                <div>
                    <a className="circle-1 bg-red-500  lg:max-3xl:flex lg:max-3xl:flex-col justify-center items-center text-center lg:max-3xl:visible hidden"
                    target="_blank"
                    rel="noreferrer"
                    href={socialProfile.GooglePlay}
                    >
                        <h2 className=" text-xl font-semibold ">
                            QR CODE SCANNER
                        </h2>
                        <img src={qrCodeIcon} className=" w-28 h-28" alt="" />
                        <p>
                            allows users to scan QR codes using their phone's
                            camera and provides a fast and secure scanning
                            experience.
                        </p>
                    </a>
                </div>
            </div>

            {/* ms store  */}
            <div className="flex justify-between w-[1280px] rounded-2xl lg:max-3xl:flex-row flex-col gap-40">
                {/* promotion box  */}
                <div className="flex items-center justify-center ">
                    <img
                        src={msStore}
                        alt=""
                        className="absolute lg:max-3xl:w-80 w-64 opacity-95"
                    />
                    <div className="relative flex flex-col items-center justify-center w-72 gap-3">
                        <h1 className=" lg:max-3xl:text-2xl font-semibold text-lg text-gray-100">
                            Edge Add-ons
                        </h1>
                        <p className="font-semibold text-center text-gray-750 lg:max-3xl:text-lg text-xs lg:max-3xl:px-2 text-gray-200 px-10">
                            Unlock your website's potential with Edge Add-ons
                        </p>
                        <a
                            href={socialProfile.MicrosoftEdgeStore}
                            target="_blank"
                            rel="noreferrer"
                            className={`${TailwindCustomStyle.lightGradiantBg} lg:max-3xl:text-lg text-xs text-red-950`}
                        >
                            Explore
                        </a>
                    </div>
                </div>

                {/* items  */}
                <div className="flex justify-between">
                    <a
                        className="note lg:max-3xl:flex lg:max-3xl:flex-col lg:max-3xl:visible hidden justify-center items-center text-center gap-4 lg:max-3xl:w-80 w-72"
                        href={socialProfile.MicrosoftEdgeStore}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2 className=" text-xl font-semibold ">Link Wallet</h2>
                        <img
                            src="https://private-user-images.githubusercontent.com/89351750/285598006-4295c66a-eda8-4e68-bef0-d91891f40a66.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDM3MTA3NDIsIm5iZiI6MTcwMzcxMDQ0MiwicGF0aCI6Ii84OTM1MTc1MC8yODU1OTgwMDYtNDI5NWM2NmEtZWRhOC00ZTY4LWJlZjAtZDkxODkxZjQwYTY2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjI3VDIwNTQwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgyYzgwODM5NzhlOTg0NWNiZGFkYzMyNGYxNmIzYTZmODMwMzJmNWJlMjBjYWFlMjM2MDgxNDA1OWY2YmI3MWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.hh5WF7Vr_vh1kWtqsqe1cyT6Qq3kvq5tmMgjl-vMoDA"
                            className=" w-24 h-24"
                            alt=""
                        />
                        <p className="text-sm">
                            A simple extension that is used to store all the
                            important links like coding profles, github,
                            linkedin, blog, personal portfolio etc. So that you
                            can access it whenever your applying for job
                        </p>
                    </a>
                </div>
            </div>

            {/* yt Shorts  */}
            <div className="flex justify-between w-[1280px] rounded-2xl lg:max-3xl:flex-row flex-col gap-40">
                {/* promotion box  */}
                <div className="flex items-center justify-center ">
                    <img
                        src={ytShort}
                        alt=""
                        className="absolute lg:max-3xl:w-80 w-64 opacity-95"
                    />
                    <div className="relative flex flex-col items-center justify-center w-72 gap-3">
                        <h1 className=" lg:max-3xl:text-2xl text-xl font-semibold">
                            YT Shorts
                        </h1>
                        <p className="lg:max-3xl:text-lg text-xs font-semibold text-center text-gray-750">
                            Learn concepts in 60 seconds
                        </p>
                        <a
                            href={socialProfile.youtube}
                            target="_blank"
                            rel="noreferrer"
                            className={`${TailwindCustomStyle.lightGradiantBg} lg:max-3xl:text-lg text-xs`}
                        >
                            Explore
                        </a>
                    </div>
                </div>

                {/* items  */}
                <div className="lg:max-3xl:flex lg:max-3xl:visible hidden justify-between">
                    <a
                        className="font-semibold circle-1 bg-red-500  text-center text-2xl lg:max-3xl:flex  lg:max-3xl:visible hidden justify-center items-center"
                        href="https://www.youtube.com/@mujeebkhan4919/shorts"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Learn to Write Readme.md in 60s
                    </a>
                    <a
                        className="font-semibold circle-2 flex justify-center text-center text-2xl items-center"
                        href="https://www.youtube.com/@mujeebkhan4919/shorts"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Dark mode in react using Tailwind CSS
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PublicWork;
