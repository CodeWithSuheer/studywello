import React from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const CtaTwo = ({ heading = "Take Your Grades to the Next Level with Studywello", text }) => {
    return (
        <>
            <section className='cta_section2'>
                <div className="py-20 max-w-6xl px-5 cta_section_cont mx-auto flex flex-col flex-wrap sm:flex-row  sm:justify-between items-center">

                    <h2 className='mb-5 text-white text-3xl sm:text-4xl font-semibold text-center sm:text-start max-w-2xl'>{heading}</h2>
                    <button onClick={() => { Tawk_API.toggle(); }} className='bg-white text-[#1A73E8] font-medium rounded-3xl px-5 py-2.5 flex items-center gap-2'>
                        <LuMessagesSquare /> {text} <FaArrowRightLong size={14} />
                    </button>

                </div>
            </section>
        </>
    )
}

export default CtaTwo
