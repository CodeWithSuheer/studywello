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
                        {/* <h3 className="mb-3 text-md capitalize font-medium text-blue-600 lg:text-md">Choose From</h3> */}
                        <h2 className="mb-3 sm:mb-4 text-2xl font-semibold capitalize text-black lg:text-4xl">Choose Our Experienced Assignment Experts</h2>
                        <p className="mb-3 sm:mb-4 text-md leading-6 font-normal text-black">At StudyWello, we know that quality writing makes all the difference. Our team of seasoned professionals excels in crafting well-researched, clearly written, and perfectly formatted assignments—always delivered on time. Trust our experts to elevate your grades and ease your academic workload.</p>
                        <p className="mb-3 sm:mb-4 text-md leading-6 font-normal text-black">Ready to Get Started?</p>

                        {/* <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
                            <div className="flex items-center"><FaDotCircle className='text-[#1A73E8] mr-2' size={13} />Ensuring 100% Confidentiality</div>
                            <div className="flex items-center"><FaDotCircle className='text-[#1A73E8] mr-2' size={13} />Guaranteeing No Spamming</div>
                            <div className="flex items-center"><FaDotCircle className='text-[#1A73E8] mr-2' size={13} />100% Plagiarism Free</div>
                            <div className="flex items-center"><FaDotCircle className='text-[#1A73E8] mr-2' size={13} />Money Back Guarantee</div>
                        </div> */}

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
