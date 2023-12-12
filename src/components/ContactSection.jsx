import React from "react";
import contactMe from "../assets/img/contact_me.svg"
import PageTitle from "./PageTitle";

const ContactSection = () => {
    return <div className="flex flex-col mt-36">

            <PageTitle title="Contact Me"  subTitle={"say Hello"}/>
        <div className="flex justify-around items-center">
            <div className="w-96 flex flex-col gap-4">

            <h1 className="text-5xl font-semibold ">{"Let's Work Together"}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, adipisci repudiandae! Earum illum a,</p>
            </div>
            <img className="w-96" src={contactMe} alt="" />
        </div>
        <div></div>
    </div>;
};

export default ContactSection;
