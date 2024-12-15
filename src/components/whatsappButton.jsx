import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
    return (
        <>
            <a
                href="https://api.whatsapp.com/send?phone=17163749747"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn flex items-center gap-2 rounded-full px-3 sm:px-5 py-3"
            >
                <FaWhatsapp size={33} /> <span className="hidden sm:flex">Free Quote On Whatsapp</span>
            </a>
        </>
    )
}
