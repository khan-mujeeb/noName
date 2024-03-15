import contactMe from "../../assets/img/contact_me.svg";
import PageTitle from "../PageTitle.jsx";
import InfoBlock from "../AboutSection/InfoBlock.jsx";
import { FaClock, FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { MdMail, MdOutlineMail } from "react-icons/md";
import { CiSquareChevLeft } from "react-icons/ci";
import contactInfo from "../../data/contactInfo.js";
import { FaTimes } from "react-icons/fa";

const ContactSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_pgp7r7p",
                "template_bz8rk1k",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="flex flex-col mt-28 justify-center lg:max-2xl:gap-10 gap-5">
            <PageTitle title="Contact Me" subTitle={"say Hello"} />
            <div className="flex lg:max-2xl:justify-around justify-center items-center">
                <div className="lg:max-2xl:w-96 flex flex-col gap-4 text-center">
                    <h1 className="lg:max-2xl:text-3xl font-semibold text-2xl dark:text-gray-100 mt-10">
                        {"Let's Work Together"}
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300  lg:max-2xl:w-96 w-80">{contactInfo.connectMessage}</p>
                </div>
                <img
                    className="md:max-2xl:w-96 lg:max-2xl:inline-block hidden"
                    src={contactMe}
                    alt=""
                />
            </div>
            <div className="flex items-center justify-around lg:max-2xl:flex-row flex-col lg:max-2xl:gap-10 gap-5">
                <div className="flex flex-col gap-5">
                    <InfoBlock icon={<MdMail />} data={contactInfo.email} />

                    <InfoBlock
                        icon={<FaLocationDot />}
                        data={contactInfo.location}
                    />
                    <InfoBlock
                        icon={<FaPhone />}
                        data={contactInfo.phoneNumber}
                    />
                    <InfoBlock
                        icon={<FaClock />}
                        data={contactInfo.timeZone}
                    />
                </div>
                {/* <div className="flex flex-col gap-5">
                    <div className="flex p-2 lg:max-2xl:w-96 w-80 border border-gray-600 rounded-xl items-center">
                        <input
                            className="flex-auto outline-none"
                            type="text"
                            placeholder="Enter Your Email"
                        />
                        <MdOutlineMail />
                    </div>
                    <div className="flex p-2 lg:max-2xl:w-96 w-80 border border-gray-600 rounded-xl items-center">
                        <input
                            className="flex-auto outline-none"
                            type="text"
                            placeholder="Enter Your Subject"
                        />
                        <CiSquareChevLeft />
                    </div>
                    <div className="flex p-2 lg:max-2xl:w-96 w-80 h-36 border border-gray-600 rounded-xl">
                        <textarea
                            className="w-full outline-none"
                            type="text"
                            placeholder="Type Your Message"
                        />
                        <FiMessageSquare />
                    </div>

                    <button className=" rounded-3xl bg-white p-3 border-black border-2 hover:bg-black hover:text-white transition-all duration-700 font-semibold">
                        {"Let's Talk"}
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default ContactSection;
