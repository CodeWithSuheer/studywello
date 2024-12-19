import React from 'react'
import { FaDotCircle } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const ChooseFrom = () => {
    return (
        <>
            <section className="text-black body-font bg-[#F4F8FE]">
                <div className="max-w-6xl mx-auto flex px-1 sm:px-5 py-24 md:flex-row flex-col items-center">

                    {/* IMAGE */}
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center" alt="hero" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_1376.png?v=1712918871" />
                    </div>

                    {/* CONTENT */}
                    <div className="lg:flex-grow px-4 md:w-1/2 xl:pl-20 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-start">
                        <h2 className="mb-3 sm:mb-4 text-2xl font-semibold capitalize text-black lg:text-4xl">Access Top-Rated Subject Specialists Today</h2>
                        <p className="mb-3 sm:mb-4 text-md leading-6 font-normal text-black">Overwhelmed by coursework? Looking to excel in complex subjects? StudyWello connects you with seasoned academic professionals who provide personalized guidance, helping you learn more efficiently, gain confidence, and achieve better results.</p>

                        <div className="button mt-0">
                            <button onClick={() => { Tawk_API.toggle(); }} className='bg-[#1A73E8] hover:bg-[#1a73e8e0] text-white rounded-3xl px-5 py-2.5 flex items-center gap-2'>
                                <LuMessagesSquare /> Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChooseFrom
