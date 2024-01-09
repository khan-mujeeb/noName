import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import InfoBlock from "../AboutSection/InfoBlock";
import { FaUserAlt } from "react-icons/fa";
import { FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { MdDateRange, MdMail } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import contactInfo from "../../data/contactInfo.js";

const ContactInfo = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <button
                className="rounded-3xl bg-black p-3 lg:max-3xl:p-3 text-sm text-white font-semibold"
                onClick={() => {
                    onOpenModal();
                }}
            >
                Contact Info
            </button>

            <Modal open={open} onClose={onCloseModal} center>
                <div className="flex flex-col gap-2">
                    <InfoBlock icon={<FaUserAlt />} data={contactInfo.name} />

                    <InfoBlock
                        icon={<FaPhone />}
                        data={contactInfo.phoneNumber}
                    />

                    <InfoBlock icon={<MdMail />} data={contactInfo.email} />
                    <a href="https://www.linkedin.com/in/mujeeb-ur-rahman-khan/">
                        <InfoBlock
                            icon={<FaLinkedinIn />}
                            data={contactInfo.linkedIn}
                        />
                    </a>

                    
                    
                    <InfoBlock
                        icon={<FaLocationDot />}
                        data={contactInfo.location}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default ContactInfo;
