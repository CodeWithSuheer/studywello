import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import './Home.css'
import { Link } from 'react-router-dom';

const Services = () => {

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

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Class Help</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">
                                Our online class support service is structured to offer you the help you need to do well in your coursework. If you're finding it hard to stay on track with your online classes or could use some extra assistance to stand out in your studies, our experienced tutors and academic experts are ready to aid you.
                            </p>

                            <Link to="/online-classes" onClick={handleMoveToTop} className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></Link>
                        </div>

                        {/* CARD 2 */}
                        <div className="service_card group box_shadow px-6 py-8 rounded-2xl bg-white transition-colors duration-300 hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Exam Help</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">Feeling overwhelmed with studying for a significant exam? Let our online exam help guide you in the right direction towards success! Our team of knowledgeable experts can help you grasp important concepts, create solid study techniques, and ace practice exams to ensure you're fully prepared.</p>

                            <Link to="/exams-help" onClick={handleMoveToTop} className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></Link>
                        </div>

                        {/* CARD 3 */}
                        <div className="service_card group box_shadow px-6 py-8 rounded-2xl bg-white transition-colors duration-300 hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Assignment Help</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">Completing assignments can be a daunting task, especially when you're juggling multiple deadlines and competing demands on your time. That's where our assignment aid service comes in. Our team of experienced tutors and academic experts is here to provide you with the assistance you need to succeed in your coursework.</p>

                            <Link to='/assignments' onClick={handleMoveToTop} className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
