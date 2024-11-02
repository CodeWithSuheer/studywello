import React from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";


const CtaOne = ({ text }) => {
    return (
        <>
            <section className='cta_section'>
                <div className="py-12 sm:py-20 cta_section_cont px-2.5 flex justify-center items-center flex-col">
                    <h2 className='mb-5 text-white text-2xl sm:text-4xl font-semibold text-center max-w-xl'>Take Your Grades to the Next Level with Studywello</h2>
                    <button onClick={() => { Tawk_API.toggle(); }} className='bg-white text-[#1A73E8] font-medium rounded-3xl px-5 py-2.5 flex items-center gap-2'>
                        <LuMessagesSquare /> {text} <FaArrowRightLong size={14} />
                    </button>
                </div>
            </section>


        </>
    )
}

export default CtaOne
