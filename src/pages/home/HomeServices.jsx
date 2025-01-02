import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import './Home.css'
import { Link } from 'react-router-dom';

const HomeServices = () => {

    const handleMoveToTop = () => {
        window.scroll(0, 0)
    }


    return (
        <>
            <section className='bg-white'>
                <div className="max-w-6xl mx-auto py-20">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h3 className="mb-1 font-medium text-md text-[#1A73E8] text-center">Services</h3>
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">Our Top-Rated Services</h2>


                    {/* --------------- CONTENT ---------------  */}
                    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 sm:px-10 px-4">

                        {/* CARD 1 */}
                        <div className="service_card group box_shadow px-6 py-8 rounded-2xl bg-white transition-colors duration-300 hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Class Support</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">
                                Struggling to Keep Up with Online Classes? Let Our Expert Team Support Your Success!
                                Managing online coursework can be overwhelming and time-consuming, but you don't have to face it alone. With StudyWello, you gain access to over 50+ top-rated, degreed professionals who are ready to help you toward academic excellence
                            </p>

                            <Link to="/online-classes" onClick={handleMoveToTop} className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></Link>
                        </div>

                        {/* CARD 2 */}
                        <div className="service_card group box_shadow px-6 py-8 rounded-2xl bg-white transition-colors duration-300 hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Exam Guidance</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">
                                Preparing for an important exam can be stressful, but it doesn’t have to be. Our team of knowledgeable experts provides in-depth concept explanations, effective study techniques, and practice resources to help you approach your exams with confidence.
                            </p>

                            <Link to="/exams-help" onClick={handleMoveToTop} className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></Link>
                        </div>

                        {/* CARD 3 */}
                        <div className="service_card group box_shadow px-6 py-8 rounded-2xl bg-white transition-colors duration-300 hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Assignment Assistance</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">
                                Juggling multiple deadlines? Our assignment assistance service connects you with experienced tutors and academic professionals who can offer valuable insights, clarify tricky instructions, and support you in creating well-structured, high-quality work.
                            </p>

                            <Link to='/assignments' onClick={handleMoveToTop} className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeServices
