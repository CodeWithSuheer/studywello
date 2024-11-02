import React from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ text = "Lets Chats" }) => {
    return (
        <>
            <button onClick={() => { Tawk_API.toggle(); }} className='bg-[#1A73E8] hover:bg-[#1a73e8e0] text-white rounded-3xl px-5 py-2.5 flex items-center gap-2'>
                <LuMessagesSquare /> {text}
            </button>
        </>
    )
}

export default Button
